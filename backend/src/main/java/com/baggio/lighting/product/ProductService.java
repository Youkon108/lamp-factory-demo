package com.baggio.lighting.product;

import com.baggio.lighting.api.ProductDtos;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.util.Objects;

@Service
public class ProductService {
    private final ProductRepository repository;
    public ProductService(ProductRepository repository) { this.repository = repository; }
    public Page<ProductDtos.Response> find(String query, String category, Pageable pageable) {
        Specification<Product> specification = Specification.where(null);
        if (query != null && !query.isBlank()) specification = specification.and((root, q, cb) -> cb.like(cb.lower(root.get("name")), "%" + query.toLowerCase() + "%"));
        if (category != null && !category.isBlank()) specification = specification.and((root, q, cb) -> cb.equal(root.get("category"), category));
        return repository.findAll(specification, pageable).map(this::response);
    }
    public ProductDtos.Response get(Long id) { return response(repository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"))); }
    public ProductDtos.Response create(ProductDtos.Request request) { return response(repository.save(from(request, new Product()))); }
    public ProductDtos.Response update(Long id, ProductDtos.Request request) { Product product = repository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found")); return response(repository.save(from(request, product))); }
    public void delete(Long id) { if (!repository.existsById(id)) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"); repository.deleteById(id); }
    private Product from(ProductDtos.Request request, Product product) { product.setName(request.name()); product.setDescription(request.description()); product.setCategory(request.category()); product.setPrice(request.price()); product.setMoq(request.moq()); product.setSpecifications(request.specifications()); product.setImage(request.image()); product.setActive(Objects.requireNonNullElse(request.active(), true)); return product; }
    private ProductDtos.Response response(Product p) { return new ProductDtos.Response(p.getId(), p.getName(), p.getDescription(), p.getCategory(), p.getPrice(), p.getMoq(), p.getSpecifications(), p.getImage(), p.isActive(), p.getCreatedAt(), p.getUpdatedAt()); }
}
