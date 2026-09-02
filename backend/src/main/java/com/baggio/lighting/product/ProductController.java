package com.baggio.lighting.product;

import com.baggio.lighting.api.ProductDtos;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    // Get all products
    @GetMapping
    public Page<ProductDtos.Response> getProducts(
            @RequestParam(required = false) String query,
            @RequestParam(required = false) String category,
            Pageable pageable) {

        return service.find(query, category, pageable);
    }

    // Get product by ID
    @GetMapping("/{id}")
    public ProductDtos.Response getProduct(@PathVariable Long id) {
        return service.get(id);
    }

    // Create product
    @PostMapping
    public ProductDtos.Response createProduct(
            @RequestBody ProductDtos.Request request) {

        return service.create(request);
    }

    // Update product
    @PutMapping("/{id}")
    public ProductDtos.Response updateProduct(
            @PathVariable Long id,
            @RequestBody ProductDtos.Request request) {

        return service.update(id, request);
    }

    // Delete product
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        service.delete(id);
    }
}