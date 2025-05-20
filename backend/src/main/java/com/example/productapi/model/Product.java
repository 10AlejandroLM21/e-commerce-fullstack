package com.example.productapi.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

import java.math.BigDecimal;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message =  "El nombre es obligatorio")
    @Size(min = 5, message = "El nombre debe contener al menos 5 caracteres")
    private String name;
    @NotBlank(message = "La descripción no puede estar vacía")
    private String description;
    @NotNull(message = "El precio es obligatorio")
    @Positive(message = "El precio debe contener un valor positivo")
    private BigDecimal price;

    private boolean available;

    // Getters y setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }

    public boolean isAvailable() { return available; }
    public void setAvailable(boolean available) { this.available = available; }
}
