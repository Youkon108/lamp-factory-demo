package com.baggio.lighting.api;

import jakarta.validation.constraints.*;
import java.math.BigDecimal;
import java.time.Instant;

public final class ProductDtos {
    private ProductDtos() { }
    public record Request(@NotBlank String name, @NotBlank String description, @NotBlank String category, @NotNull @PositiveOrZero BigDecimal price, @NotNull @Positive Integer moq, String specifications, @Size(max = 500) String image, Boolean active) { }
    public record Response(Long id, String name, String description, String category, BigDecimal price, Integer moq, String specifications, String image, boolean active, Instant createdAt, Instant updatedAt) { }
}
