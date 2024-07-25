package com.example.teste_fibbo.application.useCases.GetAllProducts;

import com.example.teste_fibbo.domain.entities.Product;

import java.util.List;

public interface IGetAllProductsUseCase {

    List<Product> execute();
}
