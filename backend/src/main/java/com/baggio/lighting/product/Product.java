package com.baggio.lighting.product;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.Instant;

@Entity
@Table(name = "products")
public class Product {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    @Column(nullable = false, length = 180) private String name;
    @Column(nullable = false, columnDefinition = "TEXT") private String description;
    @Column(nullable = false, length = 120) private String category;
    @Column(nullable = false, precision = 12, scale = 2) private BigDecimal price;
    @Column(nullable = false) private Integer moq;
    @Column(columnDefinition = "TEXT") private String specifications;
    @Column(length = 500) private String image;
    @Column(nullable = false) private boolean active = true;
    @Column(nullable = false, updatable = false) private Instant createdAt;
    @Column(nullable = false) private Instant updatedAt;

    @PrePersist void beforeCreate() { createdAt = Instant.now(); updatedAt = createdAt; }
    @PreUpdate void beforeUpdate() { updatedAt = Instant.now(); }
    public Long getId() { return id; } public void setId(Long id) { this.id = id; }
    public String getName() { return name; } public void setName(String name) { this.name = name; }
    public String getDescription() { return description; } public void setDescription(String description) { this.description = description; }
    public String getCategory() { return category; } public void setCategory(String category) { this.category = category; }
    public BigDecimal getPrice() { return price; } public void setPrice(BigDecimal price) { this.price = price; }
    public Integer getMoq() { return moq; } public void setMoq(Integer moq) { this.moq = moq; }
    public String getSpecifications() { return specifications; } public void setSpecifications(String specifications) { this.specifications = specifications; }
    public String getImage() { return image; } public void setImage(String image) { this.image = image; }
    public boolean isActive() { return active; } public void setActive(boolean active) { this.active = active; }
    public Instant getCreatedAt() { return createdAt; } public Instant getUpdatedAt() { return updatedAt; }
}
