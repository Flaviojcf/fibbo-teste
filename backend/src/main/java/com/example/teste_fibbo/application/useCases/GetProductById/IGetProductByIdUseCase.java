package com.example.teste_fibbo.application.useCases.GetProductById;


import com.example.teste_fibbo.domain.entities.Product;

import java.util.UUID;

public interface IGetProductByIdUseCase {

    Product execute(UUID id);
}
