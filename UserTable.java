package com.example.ssenior.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "UserDetails")
@Data
@NoArgsConstructor
public class UserTable {

    @Id
    @GeneratedValue(strategy =  GenerationType.AUTO)

    private int userId;
    private String userName;
    private String email;
    private String date;
    private String password;
}


