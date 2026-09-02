package com.baggio.lighting.quote;

import com.baggio.lighting.api.RequestDtos;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class QuoteService {
    private final QuoteRequestRepository repository;
    public QuoteService(QuoteRequestRepository repository) { this.repository = repository; }
    public RequestDtos.QuoteResponse create(RequestDtos.QuoteRequest r) { QuoteRequest q = new QuoteRequest(); q.setCustomerName(r.customerName()); q.setCompany(r.company()); q.setEmail(r.email()); q.setProductId(r.productId()); q.setQuantity(r.quantity()); q.setMessage(r.message()); return response(repository.save(q)); }
    public List<RequestDtos.QuoteResponse> list() { return repository.findAll().stream().map(this::response).toList(); }
    private RequestDtos.QuoteResponse response(QuoteRequest q) { return new RequestDtos.QuoteResponse(q.getId(), q.getCustomerName(), q.getCompany(), q.getEmail(), q.getProductId(), q.getQuantity(), q.getMessage(), q.getStatus(), q.getCreatedAt()); }
}
