package com.example.teste_fibbo.infrastructure.postgresql.persistance;

import com.example.teste_fibbo.domain.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface IProductRepository extends JpaRepository<Product, UUID> {
}
