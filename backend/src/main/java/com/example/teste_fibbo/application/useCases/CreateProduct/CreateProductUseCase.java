package com.example.teste_fibbo.application.useCases.CreateProduct;

import com.example.teste_fibbo.domain.entities.Product;
import com.example.teste_fibbo.infrastructure.postgresql.persistance.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CreateProductUseCase implements ICreateProductUseCase {
    private final IProductRepository _productRepository;

    @Autowired
    public CreateProductUseCase(IProductRepository productRepository) {
        this._productRepository = productRepository;
    }


    @Override
    public Product execute(CreateProductRecord createProductRecord) {
        var newProduct = new Product(createProductRecord.name(), createProductRecord.description(), createProductRecord.price());
        return _productRepository.save(newProduct);
    }
}
