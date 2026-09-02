package com.baggio.lighting.api;

import jakarta.validation.constraints.*;
import java.time.Instant;

public final class RequestDtos {
    private RequestDtos() { }
    public record InquiryRequest(@NotBlank String customerName, @NotBlank String company, @Email @NotBlank String email, String phone, Long productId, @NotNull @Positive Integer quantity, @NotBlank String message) { }
    public record QuoteRequest(@NotBlank String customerName, @NotBlank String company, @Email @NotBlank String email, Long productId, @NotNull @Positive Integer quantity, @NotBlank String message) { }
    public record InquiryResponse(Long id, String customerName, String company, String email, String phone, Long productId, Integer quantity, String message, String status, Instant createdAt) { }
    public record QuoteResponse(Long id, String customerName, String company, String email, Long productId, Integer quantity, String message, String status, Instant createdAt) { }
}
