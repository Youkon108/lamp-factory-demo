package com.baggio.lighting.inquiry;

import com.baggio.lighting.api.RequestDtos;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/inquiries")
public class InquiryController {
    private final InquiryService service;
    public InquiryController(InquiryService service) { this.service = service; }
    @PostMapping public RequestDtos.InquiryResponse create(@Valid @RequestBody RequestDtos.InquiryRequest request) { return service.create(request); }
    @GetMapping public List<RequestDtos.InquiryResponse> list() { return service.list(); }
}
