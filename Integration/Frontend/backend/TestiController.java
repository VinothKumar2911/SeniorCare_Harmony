package com.example.ssenior.controller;

import com.example.ssenior.model.Testi;
import com.example.ssenior.services.TestiService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/testimonials")
public class TestiController {

    @Autowired
    private TestiService testiService;

    @GetMapping
    public ResponseEntity<List<Testi>> getAllTestimonials() {
        List<Testi> testimonials = testiService.getAllTestimonials();
        return new ResponseEntity<>(testimonials, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Testi> getTestimonialById(@PathVariable int id) {
        Optional<Testi> testimonial = testiService.getTestimonialById(id);
        return testimonial.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Testi> createTestimonial(@RequestBody Testi testimonial) {
        Testi createdTestimonial = testiService.createTestimonial(testimonial);
        return new ResponseEntity<>(createdTestimonial, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Testi> updateTestimonial(@PathVariable int id, @RequestBody Testi testimonial) {
        Testi updatedTestimonial = testiService.updateTestimonial(id, testimonial);
        return new ResponseEntity<>(updatedTestimonial, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTestimonial(@PathVariable int id) {
        testiService.deleteTestimonial(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
