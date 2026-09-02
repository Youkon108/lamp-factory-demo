package com.baggio.lighting.api;

import jakarta.validation.constraints.NotBlank;

public final class CategoryDtos {
    private CategoryDtos() { }
    public record Request(@NotBlank String name, String description) { }
    public record Response(Long id, String name, String description) { }
}
