package com.example.teste_fibbo.domain.exceptions;

import lombok.Getter;

import java.util.List;

@Getter
public class UpdateDomainException extends RuntimeException {
    private final List<String> errors;

    public UpdateDomainException(List<String> errors) {
        super(String.join(", ", errors));
        this.errors = errors;
    }

}
