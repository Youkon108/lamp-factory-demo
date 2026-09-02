package com.baggio.lighting.quote;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "quote_requests")
public class QuoteRequest {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    @Column(nullable = false, length = 120) private String customerName;
    @Column(nullable = false, length = 160) private String company;
    @Column(nullable = false, length = 180) private String email;
    private Long productId;
    @Column(nullable = false) private Integer quantity;
    @Column(nullable = false, columnDefinition = "TEXT") private String message;
    @Column(nullable = false, length = 40) private String status = "NEW";
    @Column(nullable = false, updatable = false) private Instant createdAt;
    @PrePersist void beforeCreate() { createdAt = Instant.now(); }
    public Long getId() { return id; } public String getCustomerName() { return customerName; } public void setCustomerName(String value) { customerName = value; }
    public String getCompany() { return company; } public void setCompany(String value) { company = value; } public String getEmail() { return email; } public void setEmail(String value) { email = value; }
    public Long getProductId() { return productId; } public void setProductId(Long value) { productId = value; } public Integer getQuantity() { return quantity; } public void setQuantity(Integer value) { quantity = value; }
    public String getMessage() { return message; } public void setMessage(String value) { message = value; } public String getStatus() { return status; } public void setStatus(String value) { status = value; } public Instant getCreatedAt() { return createdAt; }
}
