package com.example.teste_fibbo.domain.exceptions;

import lombok.Getter;

import java.util.List;

@Getter
public class ProductNotFoundException extends RuntimeException {
    private final List<String> errors;

    public ProductNotFoundException(List<String> errors) {
        super(String.join(", ", errors));
        this.errors = errors;
    }

}
