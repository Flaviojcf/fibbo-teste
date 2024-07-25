package com.example.teste_fibbo.domain.exceptions;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ErrorResponse {
    private int statusCode;
    private String error;
    private List<String> messages;

    public ErrorResponse(int statusCode, String error, List<String> messages) {
        this.statusCode = statusCode;
        this.error = error;
        this.messages = messages;
    }
}
