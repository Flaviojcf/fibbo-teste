package com.example.teste_fibbo.application;

import com.example.teste_fibbo.application.useCases.DeleteProduct.DeleteProductUseCase;
import com.example.teste_fibbo.application.useCases.GetProductById.IGetProductByIdUseCase;
import com.example.teste_fibbo.domain.entities.Product;
import com.example.teste_fibbo.infrastructure.postgresql.persistance.IProductRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;


import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class DeleteProductUseCaseUnitTest {

    @Mock
    private IProductRepository productRepository;

    @Mock
    private IGetProductByIdUseCase getProductByIdUseCase;

    @InjectMocks
    private DeleteProductUseCase deleteProductUseCase;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void GivenExistingProductId_WhenExecute_ThenProductIsDeleted() {
        // Arrange
        Product product = new Product("Test Product", "Test Description", 100.0);
        when(getProductByIdUseCase.execute(product.getId())).thenReturn(product);

        // Act
        deleteProductUseCase.execute(product.getId());

        // Assert
        verify(productRepository).deleteById(eq(product.getId()));
    }
}
