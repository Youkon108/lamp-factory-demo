package com.baggio.lighting.chat;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin
public class ChatController {

    private final ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    // সব conversation
    @GetMapping("/conversations")
    public List<Conversation> getConversations() {
        return chatService.getConversations();
    }

    // একটি conversation-এর messages
    @GetMapping("/conversations/{id}/messages")
    public List<Message> getMessages(@PathVariable Long id) {
        return chatService.getMessages(id);
    }

    // নতুন Buyer conversation তৈরি
    @PostMapping("/conversations")
    public Conversation createConversation(
            @RequestParam String customerName,
            @RequestParam String customerEmail,
            @RequestParam(required = false) Long productId) {

        return chatService.createConversation(
                customerName,
                customerEmail,
                productId
        );
    }

    // Buyer/Seller message পাঠাবে
    @PostMapping("/conversations/{id}/messages")
    public Message sendMessage(
            @PathVariable Long id,
            @RequestParam Message.SenderType senderType,
            @RequestParam String senderName,
            @RequestParam String body) {

        return chatService.sendMessage(
                id,
                senderType,
                senderName,
                body
        );
    }
}