package com.example.ssenior.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ssenior.model.ServiceDetails;

@Repository
public interface ServiceRepo extends JpaRepository<ServiceDetails,Integer>{

}
