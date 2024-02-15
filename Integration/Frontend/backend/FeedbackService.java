package com.example.ssenior.services;

import com.example.ssenior.model.Feedback;
import com.example.ssenior.repo.FeedbackRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepo feedbackRepo;

    public List<Feedback> getAllFeedbacks() {
        return feedbackRepo.findAll();
    }

    public Optional<Feedback> getFeedbackById(int id) {
        return feedbackRepo.findById(id);
    }

    public Feedback createFeedback(Feedback feedback) {
        return feedbackRepo.save(feedback);
    }

    public Feedback updateFeedback(int id, Feedback feedback) {
        feedback.setId(id); 
        return feedbackRepo.save(feedback);
    }

    public void deleteFeedback(int id) {
        feedbackRepo.deleteById(id);
    }
}
