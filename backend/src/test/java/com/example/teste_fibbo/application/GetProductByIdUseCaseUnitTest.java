package com.example.teste_fibbo.application;

import com.example.teste_fibbo.application.useCases.GetProductById.GetProductByIdUseCase;
import com.example.teste_fibbo.domain.entities.Product;
import com.example.teste_fibbo.domain.exceptions.ProductNotFoundException;
import com.example.teste_fibbo.infrastructure.postgresql.persistance.IProductRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Collections;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

public class GetProductByIdUseCaseUnitTest {

    @Mock
    private IProductRepository productRepository;

    @InjectMocks
    private GetProductByIdUseCase getProductByIdUseCase;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void GivenProductExists_WhenExecute_ThenReturnProduct() {
        // Arrange
        Product expectedProduct = new Product("Test Product", "Test Description", 100.0);
        when(productRepository.findById(expectedProduct.getId())).thenReturn(Optional.of(expectedProduct));

        // Act
        Product result = getProductByIdUseCase.execute(expectedProduct.getId());

        // Assert
        assertEquals(expectedProduct, result);
    }

    @Test
    public void GivenProductDoesNotExist_whenExecute_thenThrowProductNotFoundException() {
        // Arrange
        UUID productId = UUID.randomUUID();

        when(productRepository.findById(productId)).thenReturn(Optional.empty());

        // Act & Assert
        ProductNotFoundException thrownException = assertThrows(
                ProductNotFoundException.class,
                () -> getProductByIdUseCase.execute(productId),
                "Expected execute() to throw ProductNotFoundException"
        );

        assertEquals(Collections.singletonList("Product with id '" + productId + "' was not found"), thrownException.getErrors());
    }
}
