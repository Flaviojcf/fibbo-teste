package com.example.teste_fibbo.domain.validations;


import java.util.ArrayList;
import java.util.List;

public class CreateDomainValidation {

    public static List<String> validate(String name, String description, double price) {
        List<String> errors = new ArrayList<>();

        if (name == null || name.trim().isEmpty()) {
            errors.add("Name cannot be null or empty.");
        }

        if (description == null || description.trim().isEmpty()) {
            errors.add("Description cannot be null or empty.");
        }

        if (price <= 0) {
            errors.add("Price must be greater than zero.");
        }

        return errors;
    }
}
