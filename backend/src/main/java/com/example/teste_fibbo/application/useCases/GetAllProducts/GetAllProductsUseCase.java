package com.example.teste_fibbo.application.useCases.GetAllProducts;

import com.example.teste_fibbo.domain.entities.Product;
import com.example.teste_fibbo.infrastructure.postgresql.persistance.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GetAllProductsUseCase implements IGetAllProductsUseCase {
    private final IProductRepository _productRepository;

    @Autowired
    public GetAllProductsUseCase(IProductRepository productRepository) {
        this._productRepository = productRepository;

    }

    @Override
    public List<Product> execute() {
        return _productRepository.findAll();
    }
}
