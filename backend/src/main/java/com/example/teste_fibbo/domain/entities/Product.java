package com.example.teste_fibbo.domain.entities;

import com.example.teste_fibbo.domain.exceptions.CreateDomainException;
import com.example.teste_fibbo.domain.exceptions.UpdateDomainException;
import com.example.teste_fibbo.domain.validations.CreateDomainValidation;
import com.example.teste_fibbo.domain.validations.UpdateDomainValidation;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "products")
@Getter
@NoArgsConstructor
public class Product extends BaseEntity {

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "price", nullable = false)
    private double price;

    public Product(String name, String description, double price) {
        List<String> validationErrors = CreateDomainValidation.validate(name, description, price);

        if (!validationErrors.isEmpty()) {
            throw new CreateDomainException(validationErrors);
        }

        this.name = name;
        this.description = description;
        this.price = price;
    }

    public void UpdateProduct(String name, String description, double price) {

        List<String> validationErrors = UpdateDomainValidation.validate(name, description, price);

        if (!validationErrors.isEmpty()) {
            throw new UpdateDomainException(validationErrors);

        }
        this.name = name;
        this.description = description;
        this.price = price;
    }
}
