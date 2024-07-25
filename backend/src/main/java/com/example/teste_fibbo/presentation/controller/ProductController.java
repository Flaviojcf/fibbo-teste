package com.example.teste_fibbo.presentation.controller;

import com.example.teste_fibbo.application.useCases.CreateProduct.CreateProductRecord;
import com.example.teste_fibbo.application.useCases.CreateProduct.CreateProductUseCase;
import com.example.teste_fibbo.application.useCases.CreateProduct.ICreateProductUseCase;
import com.example.teste_fibbo.application.useCases.DeleteProduct.IDeleteProductUseCase;
import com.example.teste_fibbo.application.useCases.GetAllProducts.IGetAllProductsUseCase;
import com.example.teste_fibbo.application.useCases.GetProductById.IGetProductByIdUseCase;
import com.example.teste_fibbo.application.useCases.UpdateProduct.IUpdateProductUseCase;
import com.example.teste_fibbo.application.useCases.UpdateProduct.UpdateProductRecord;
import com.example.teste_fibbo.domain.entities.Product;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
public class ProductController {
    private final ICreateProductUseCase _createProductUseCase;
    private final IDeleteProductUseCase _deleteProductUseCase;
    private final IGetAllProductsUseCase _getAllProductsUseCase;
    private final IGetProductByIdUseCase _getProductByIdUseCase;
    private final IUpdateProductUseCase _updateProductUseCase;

    @Autowired
    public ProductController(CreateProductUseCase createProductUseCase, IDeleteProductUseCase deleteProductUseCase,
                             IGetAllProductsUseCase getAllProductsUseCase, IGetProductByIdUseCase getProductByIdUseCase,
                             IUpdateProductUseCase updateProductUseCase) {
        this._createProductUseCase = createProductUseCase;
        _deleteProductUseCase = deleteProductUseCase;
        _getAllProductsUseCase = getAllProductsUseCase;
        _getProductByIdUseCase = getProductByIdUseCase;
        _updateProductUseCase = updateProductUseCase;
    }

    @Operation(summary = "Create a new product")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Product created successfully"),
    })
    @PostMapping("/product")
    public ResponseEntity<Product> CreateProduct(@RequestBody CreateProductRecord createProductRecord) {
        var product = _createProductUseCase.execute(createProductRecord);

        URI location = URI.create(String.format("/product/%s", product.getId()));

        return ResponseEntity.created(location).body(product);
    }

    @Operation(summary = "Delete a product by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Product deleted successfully"),
    })
    @DeleteMapping("/product/{id}")
    public ResponseEntity<Void> DeleteProduct(@PathVariable("id") UUID id) {
        _deleteProductUseCase.execute(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Get all products")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Products founded successfully"),
    })
    @GetMapping("/products")
    public List<Product> GetAllProducts() {
        return _getAllProductsUseCase.execute();
    }

    @Operation(summary = "Get a product by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Product founded successfully"),
    })
    @GetMapping("/product/{id}")
    public ResponseEntity<Product> GetProductById(@PathVariable("id") UUID id) {
        var product = _getProductByIdUseCase.execute(id);
        return ResponseEntity.ok(product);
    }

    @Operation(summary = "Update a product by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Product updated successfully"),
    })
    @PutMapping("/product/{id}")
    public ResponseEntity<Product> UpdateProduct(@PathVariable("id") UUID id, @RequestBody UpdateProductRecord updateProductRecord) {
        _updateProductUseCase.execute(id, updateProductRecord);

        return ResponseEntity.noContent().build();
    }
}
