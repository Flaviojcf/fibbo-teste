package com.example.teste_fibbo.application.useCases.GetProductById;

import com.example.teste_fibbo.domain.entities.Product;
import com.example.teste_fibbo.domain.exceptions.ProductNotFoundException;
import com.example.teste_fibbo.infrastructure.postgresql.persistance.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Optional;
import java.util.UUID;

@Service
public class GetProductByIdUseCase implements IGetProductByIdUseCase {
    private final IProductRepository _productRepository;

    @Autowired
    public GetProductByIdUseCase(IProductRepository productRepository) {
        this._productRepository = productRepository;
    }

    @Override
    public Product execute(UUID id) {
        Optional<Product> productOptional = _productRepository.findById(id);

        if (productOptional.isEmpty()) {
            throw new ProductNotFoundException(Collections.singletonList("Product with id '" + id + "' was not found"));
        }

        return productOptional.get();
    }
}
