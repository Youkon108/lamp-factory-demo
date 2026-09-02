package com.baggio.lighting.category;

import com.baggio.lighting.api.CategoryDtos;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    private final CategoryService service;
    public CategoryController(CategoryService service) { this.service = service; }
    @GetMapping public List<CategoryDtos.Response> list() { return service.list(); }
    @PostMapping public CategoryDtos.Response create(@Valid @RequestBody CategoryDtos.Request request) { return service.create(request); }
    @PutMapping("/{id}") public CategoryDtos.Response update(@PathVariable Long id, @Valid @RequestBody CategoryDtos.Request request) { return service.update(id, request); }
    @DeleteMapping("/{id}") public void delete(@PathVariable Long id) { service.delete(id); }
}
