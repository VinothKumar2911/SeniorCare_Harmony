package com.example.ssenior.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ssenior.model.Testi;

@Repository
public interface TestiRepo extends JpaRepository<Testi,Integer>{

}
