package com.example.ssenior.repo;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ssenior.model.BookingDetails;

@Repository
public interface BookingRepo extends JpaRepository<BookingDetails,Integer>{
    
    
    List<BookingDetails> findByPhone(String phone);
}
