package com.example.ssenior.services;

import com.example.ssenior.model.Testi;
import com.example.ssenior.repo.TestiRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TestiService {

    @Autowired
    private TestiRepo testiRepo;

    public List<Testi> getAllTestimonials() {
        return testiRepo.findAll();
    }

    public Optional<Testi> getTestimonialById(int id) {
        return testiRepo.findById(id);
    }

    public Testi createTestimonial(Testi testimonial) {
        return testiRepo.save(testimonial);
    }

    public Testi updateTestimonial(int id, Testi testimonial) {
        testimonial.setId(id); 
        return testiRepo.save(testimonial);
    }

    public void deleteTestimonial(int id) {
        testiRepo.deleteById(id);
    }
}
