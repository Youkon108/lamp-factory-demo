package com.baggio.lighting.quote;

import com.baggio.lighting.api.RequestDtos;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/quotes")
public class QuoteController {
    private final QuoteService service;
    public QuoteController(QuoteService service) { this.service = service; }
    @PostMapping public RequestDtos.QuoteResponse create(@Valid @RequestBody RequestDtos.QuoteRequest request) { return service.create(request); }
    @GetMapping public List<RequestDtos.QuoteResponse> list() { return service.list(); }
}
