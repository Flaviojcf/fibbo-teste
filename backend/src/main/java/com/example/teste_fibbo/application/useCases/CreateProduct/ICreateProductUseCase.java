package com.example.teste_fibbo.application.useCases.CreateProduct;

import com.example.teste_fibbo.domain.entities.Product;

public interface ICreateProductUseCase {
    Product execute(CreateProductRecord createProductRecord);
}
