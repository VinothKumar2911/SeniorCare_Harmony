package com.example.ssenior.services;

import com.example.ssenior.model.ServiceDetails;
import com.example.ssenior.repo.ServiceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceDetailsService {

    @Autowired
    private ServiceRepo serviceRepo;

    public List<ServiceDetails> getAllServices() {
        return serviceRepo.findAll();
    }

    public Optional<ServiceDetails> getServiceById(int id) {
        return serviceRepo.findById(id);
    }

    public ServiceDetails createService(ServiceDetails serviceDetails) {
        return serviceRepo.save(serviceDetails);
    }

    public ServiceDetails updateService(int id, ServiceDetails serviceDetails) {
        serviceDetails.setId(id); // Set the ID for the service
        return serviceRepo.save(serviceDetails);
    }

    public void deleteService(int id) {
        serviceRepo.deleteById(id);
    }
}
