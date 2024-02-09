package com.example.ssenior.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ssenior.model.Feedback;

@Repository
public interface FeedbackRepo extends JpaRepository<Feedback,Integer> {

}
