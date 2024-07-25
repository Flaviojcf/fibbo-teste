package com.example.teste_fibbo.application;

import com.example.teste_fibbo.application.useCases.CreateProduct.CreateProductRecord;
import com.example.teste_fibbo.application.useCases.CreateProduct.CreateProductUseCase;
import com.example.teste_fibbo.domain.entities.Product;
import com.example.teste_fibbo.infrastructure.postgresql.persistance.IProductRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;

public class CreateProductUseCaseUnitTest {

    @Mock
    private IProductRepository productRepository;

    @InjectMocks
    private CreateProductUseCase createProductUseCase;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void GivenValidProductData_WhenExecute_ThenProductIsSaved() {
        // Arrange
        var createProductRecord = new CreateProductRecord("Test Product", "Test Description", 100.0);
        var expectedProduct = new Product("Test Product", "Test Description", 100.0);
        when(productRepository.save(any(Product.class))).thenReturn(expectedProduct);

        // Act
        var result = createProductUseCase.execute(createProductRecord);

        // Assert
        assertEquals(expectedProduct, result);
        verify(productRepository).save(any(Product.class));
    }
}
