package com.baggio.lighting.category;

import com.baggio.lighting.api.CategoryDtos;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;

@Service
public class CategoryService {
    private final CategoryRepository repository;
    public CategoryService(CategoryRepository repository) { this.repository = repository; }
    public List<CategoryDtos.Response> list() { return repository.findAll().stream().map(c -> new CategoryDtos.Response(c.getId(), c.getName(), c.getDescription())).toList(); }
    public CategoryDtos.Response create(CategoryDtos.Request request) { return response(repository.save(from(request, new Category()))); }
    public CategoryDtos.Response update(Long id, CategoryDtos.Request request) { Category category = repository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Category not found")); return response(repository.save(from(request, category))); }
    public void delete(Long id) { if (!repository.existsById(id)) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Category not found"); repository.deleteById(id); }
    private Category from(CategoryDtos.Request r, Category c) { c.setName(r.name()); c.setDescription(r.description()); return c; }
    private CategoryDtos.Response response(Category c) { return new CategoryDtos.Response(c.getId(), c.getName(), c.getDescription()); }
}
