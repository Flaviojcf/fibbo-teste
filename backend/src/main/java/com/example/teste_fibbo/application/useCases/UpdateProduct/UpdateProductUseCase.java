package com.example.teste_fibbo.application.useCases.UpdateProduct;

import com.example.teste_fibbo.application.useCases.GetProductById.IGetProductByIdUseCase;
import com.example.teste_fibbo.infrastructure.postgresql.persistance.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UpdateProductUseCase implements IUpdateProductUseCase {

    private final IProductRepository _productRepository;
    private final IGetProductByIdUseCase _getProductByIdUseCase;

    @Autowired
    public UpdateProductUseCase(IProductRepository productRepository, IGetProductByIdUseCase getProductByIdUseCase) {
        this._productRepository = productRepository;
        this._getProductByIdUseCase = getProductByIdUseCase;
    }


    @Override
    public void execute(UUID id, UpdateProductRecord updateProductRecord) {
        var product = _getProductByIdUseCase.execute(id);

        product.UpdateProduct(updateProductRecord.name(), updateProductRecord.description(), updateProductRecord.price());

        _productRepository.save(product);
    }

}
