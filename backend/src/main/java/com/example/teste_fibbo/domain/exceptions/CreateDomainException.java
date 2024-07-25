package com.example.teste_fibbo.domain.exceptions;

import lombok.Getter;

import java.util.List;

@Getter
public class CreateDomainException extends RuntimeException {
    private final List<String> errors;

    public CreateDomainException(List<String> errors) {
        super(String.join(", ", errors));
        this.errors = errors;
    }

}
