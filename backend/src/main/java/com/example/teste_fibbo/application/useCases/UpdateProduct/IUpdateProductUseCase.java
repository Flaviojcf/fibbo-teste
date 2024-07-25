package com.example.teste_fibbo.application.useCases.UpdateProduct;

import java.util.UUID;

public interface IUpdateProductUseCase {
    void execute(UUID id, UpdateProductRecord updateProductRecord);
}
