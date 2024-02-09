package com.example.ssenior.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="Booking")
@Data
@NoArgsConstructor
public class BookingDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int bookingID;
    private String date;
    private String time;
    private String gender;
    private int count;
    private String member;
    private String address;
    private long phone;
    


   

}
