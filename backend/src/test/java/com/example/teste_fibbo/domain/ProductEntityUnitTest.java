package com.example.teste_fibbo.domain;

import com.example.teste_fibbo.domain.entities.Product;
import com.example.teste_fibbo.domain.exceptions.CreateDomainException;
import com.example.teste_fibbo.domain.exceptions.UpdateDomainException;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class ProductEntityUnitTest {

    @Test
    void GivenValidProductData_WhenCreatingProduct_ThenProductIsCreatedSuccessfully() {
        // Arrange
        String name = "Product Name";
        String description = "Product Description";
        double price = 100.0;

        // Act
        Product product = new Product(name, description, price);

        // Assert
        assertEquals(name, product.getName());
        assertEquals(description, product.getDescription());
        assertEquals(price, product.getPrice());
    }

    @Test
    void GivenInvalidProductName_WhenCreatingProduct_ThenThrowsCreateDomainException() {
        // Arrange
        String name = "";
        String description = "Product Description";
        double price = 100.0;

        // Act & Assert
        CreateDomainException thrown = assertThrows(CreateDomainException.class, () -> new Product(name, description, price));
        assertTrue(thrown.getErrors().contains("Name cannot be null or empty."),
                "Expected CreateDomainException to contain error message 'Name cannot be null or empty.'");
    }

    @Test
    void GivenInvalidProductDescription_WhenCreatingProduct_ThenThrowsCreateDomainException() {
        // Arrange
        String name = "product";
        String description = "";
        double price = 100.0;

        // Act & Assert
        CreateDomainException thrown = assertThrows(CreateDomainException.class, () -> new Product(name, description, price));
        assertTrue(thrown.getErrors().contains("Description cannot be null or empty."),
                "Expected CreateDomainException to contain error message 'Description cannot be null or empty.'");
    }

    @Test
    void GivenInvalidProductPrice_WhenCreatingProduct_ThenThrowsCreateDomainException() {
        // Arrange
        String name = "product";
        String description = "Product Description";
        double price = 0;

        // Act & Assert
        CreateDomainException thrown = assertThrows(CreateDomainException.class, () -> new Product(name, description, price));
        assertTrue(thrown.getErrors().contains("Price must be greater than zero."),
                "Expected CreateDomainException to contain error message 'Price must be greater than zero.'");
    }

    @Test
    void GivenValidProductData_WhenUpdatingProduct_ThenProductIsUpdatedSuccessfully() {
        // Arrange
        Product product = new Product("Old Name", "Old Description", 50.0);

        String newName = "New Product Name";
        String newDescription = "New Product Description";
        double newPrice = 150.0;

        // Act
        product.UpdateProduct(newName, newDescription, newPrice);

        // Assert
        assertEquals(newName, product.getName(), "Product name should be updated");
        assertEquals(newDescription, product.getDescription(), "Product description should be updated");
        assertEquals(newPrice, product.getPrice(), "Product price should be updated");
    }

    @Test
    void GivenInvalidProductName_WhenUpdatingProduct_ThenThrowsUpdateDomainException() {
        // Arrange
        Product product = new Product("Old Name", "Old Description", 50.0);

        String newName = "";
        String newDescription = "New Product Description";
        double newPrice = 150.0;


        // Act && Assert
        UpdateDomainException thrown = assertThrows(UpdateDomainException.class, () ->
                product.UpdateProduct(newName, newDescription, newPrice));
        assertTrue(thrown.getErrors().contains("Name cannot be null or empty."),
                "Expected UpdateDomainException to contain error message 'Name cannot be null or empty.'");
    }

    @Test
    void GivenInvalidProductDescription_WhenUpdatingProduct_ThenThrowsUpdateDomainException() {
        // Arrange
        Product product = new Product("Old Name", "Old Description", 50.0);

        String newName = "New Product";
        String newDescription = "";
        double newPrice = 150.0;


        // Act && Assert
        UpdateDomainException thrown = assertThrows(UpdateDomainException.class, () ->
                product.UpdateProduct(newName, newDescription, newPrice));
        assertTrue(thrown.getErrors().contains("Description cannot be null or empty."),
                "Expected UpdateDomainException to contain error message 'Description cannot be null or empty.'");
    }

    @Test
    void GivenInvalidProductPrice_WhenUpdatingProduct_ThenThrowsUpdateDomainException() {
        // Arrange
        Product product = new Product("Old Name", "Old Description", 50.0);

        String newName = "New Product";
        String newDescription = "New Product Description";
        double newPrice = 0;


        // Act && Assert
        UpdateDomainException thrown = assertThrows(UpdateDomainException.class, () ->
                product.UpdateProduct(newName, newDescription, newPrice));
        assertTrue(thrown.getErrors().contains("Price must be greater than zero."),
                "Expected UpdateDomainException to contain error message 'Price must be greater than zero.'");
    }
}
