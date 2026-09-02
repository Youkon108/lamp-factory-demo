package com.baggio.lighting.inquiry;

import com.baggio.lighting.api.RequestDtos;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class InquiryService {
    private final CustomerInquiryRepository repository;
    public InquiryService(CustomerInquiryRepository repository) { this.repository = repository; }
    public RequestDtos.InquiryResponse create(RequestDtos.InquiryRequest r) { CustomerInquiry i = new CustomerInquiry(); i.setCustomerName(r.customerName()); i.setCompany(r.company()); i.setEmail(r.email()); i.setPhone(r.phone()); i.setProductId(r.productId()); i.setQuantity(r.quantity()); i.setMessage(r.message()); return response(repository.save(i)); }
    public List<RequestDtos.InquiryResponse> list() { return repository.findAll().stream().map(this::response).toList(); }
    private RequestDtos.InquiryResponse response(CustomerInquiry i) { return new RequestDtos.InquiryResponse(i.getId(), i.getCustomerName(), i.getCompany(), i.getEmail(), i.getPhone(), i.getProductId(), i.getQuantity(), i.getMessage(), i.getStatus(), i.getCreatedAt()); }
}
