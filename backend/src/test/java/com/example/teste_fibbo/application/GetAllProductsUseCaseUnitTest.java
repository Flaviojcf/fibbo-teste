package com.example.teste_fibbo.application;

import com.example.teste_fibbo.application.useCases.GetAllProducts.GetAllProductsUseCase;
import com.example.teste_fibbo.domain.entities.Product;
import com.example.teste_fibbo.infrastructure.postgresql.persistance.IProductRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class GetAllProductsUseCaseUnitTest {

    @Mock
    private IProductRepository productRepository;

    @InjectMocks
    private GetAllProductsUseCase getAllProductsUseCase;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void GivenProductsExist_WhenExecute_ThenReturnAllProducts() {
        // Arrange
        Product product1 = new Product("Product 1", "Description 1", 50.0);
        Product product2 = new Product("Product 2", "Description 2", 75.0);
        List<Product> expectedProducts = Arrays.asList(product1, product2);

        when(productRepository.findAll()).thenReturn(expectedProducts);

        // Act
        List<Product> result = getAllProductsUseCase.execute();

        // Assert
        assertEquals(expectedProducts, result);
        verify(productRepository).findAll();
    }
}
