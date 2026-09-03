package com.baggio.lighting.chat;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatService {

    private final ConversationRepository conversationRepository;
    private final MessageRepository messageRepository;

    public ChatService(
            ConversationRepository conversationRepository,
            MessageRepository messageRepository) {
        this.conversationRepository = conversationRepository;
        this.messageRepository = messageRepository;
    }

    // সব conversation দেখাবে
    public List<Conversation> getConversations() {
        return conversationRepository.findAll();
    }

    // নির্দিষ্ট conversation-এর সব message দেখাবে
    public List<Message> getMessages(Long conversationId) {
        return messageRepository
                .findByConversationIdOrderByCreatedAtAsc(conversationId);
    }

    // Buyer নতুন conversation শুরু করবে
    public Conversation createConversation(
            String customerName,
            String customerEmail,
            Long productId) {

        Conversation conversation = new Conversation();

        conversation.setCustomerName(customerName);
        conversation.setCustomerEmail(customerEmail);
        conversation.setProductId(productId);
        conversation.setStatus(Conversation.Status.OPEN);

        return conversationRepository.save(conversation);
    }

    // Buyer অথবা Seller message পাঠাবে
    public Message sendMessage(
            Long conversationId,
            Message.SenderType senderType,
            String senderName,
            String body) {

        Message message = new Message();

        message.setConversationId(conversationId);
        message.setSenderType(senderType);
        message.setSenderName(senderName);
        message.setBody(body);

        return messageRepository.save(message);
    }
}