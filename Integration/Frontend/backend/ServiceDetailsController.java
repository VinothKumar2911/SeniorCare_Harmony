package com.example.ssenior.controller;

import com.example.ssenior.model.ServiceDetails;
import com.example.ssenior.services.ServiceDetailsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/services")
public class ServiceDetailsController {

    @Autowired
    private ServiceDetailsService serviceDetailsService;

    @GetMapping
    public ResponseEntity<List<ServiceDetails>> getAllServices() {
        List<ServiceDetails> services = serviceDetailsService.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServiceDetails> getServiceById(@PathVariable int id) {
        Optional<ServiceDetails> serviceDetails = serviceDetailsService.getServiceById(id);
        return serviceDetails.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<ServiceDetails> createService(@RequestBody ServiceDetails serviceDetails) {
        ServiceDetails createdService = serviceDetailsService.createService(serviceDetails);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ServiceDetails> updateService(@PathVariable int id, @RequestBody ServiceDetails serviceDetails) {
        ServiceDetails updatedService = serviceDetailsService.updateService(id, serviceDetails);
        return new ResponseEntity<>(updatedService, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteService(@PathVariable int id) {
        serviceDetailsService.deleteService(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
