package com.example.teste_fibbo.application.useCases.DeleteProduct;

import com.example.teste_fibbo.application.useCases.GetProductById.IGetProductByIdUseCase;
import com.example.teste_fibbo.infrastructure.postgresql.persistance.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class DeleteProductUseCase implements IDeleteProductUseCase {

    private final IProductRepository _productRepository;
    private final IGetProductByIdUseCase _getProductByIdUseCase;


    @Autowired
    public DeleteProductUseCase(IProductRepository productRepository, IGetProductByIdUseCase getProductByIdUseCase) {
        this._productRepository = productRepository;
        this._getProductByIdUseCase = getProductByIdUseCase;
    }

    @Override
    @Async
    public void execute(UUID id) {
        var product = _getProductByIdUseCase.execute(id);
        _productRepository.deleteById(product.getId());
    }
}
