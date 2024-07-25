package com.example.teste_fibbo.application;

import com.example.teste_fibbo.application.useCases.UpdateProduct.UpdateProductUseCase;
import com.example.teste_fibbo.application.useCases.GetProductById.IGetProductByIdUseCase;
import com.example.teste_fibbo.domain.entities.Product;
import com.example.teste_fibbo.infrastructure.postgresql.persistance.IProductRepository;
import com.example.teste_fibbo.application.useCases.UpdateProduct.UpdateProductRecord;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.UUID;

import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

public class UpdateProductUseCaseUnitTest {

    @Mock
    private IProductRepository productRepository;

    @Mock
    private IGetProductByIdUseCase getProductByIdUseCase;

    @InjectMocks
    private UpdateProductUseCase updateProductUseCase;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void GivenValidProductIdAndUpdateData_WhenExecute_ThenProductIsUpdatedAndSaved() {
        // Arrange
        Product existingProduct = new Product("Old Name", "Old Description", 50.0);

        UpdateProductRecord updateProductRecord = new UpdateProductRecord("New Name", "New Description", 75.0);

        when(getProductByIdUseCase.execute(existingProduct.getId())).thenReturn(existingProduct);

        // Act
        updateProductUseCase.execute(existingProduct.getId(), updateProductRecord);

        // Assert
        verify(getProductByIdUseCase).execute(eq(existingProduct.getId()));
        verify(productRepository).save(argThat(product ->
                "New Name".equals(product.getName()) &&
                        "New Description".equals(product.getDescription()) &&
                        75.0 == product.getPrice()
        ));
    }
}
