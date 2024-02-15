package com.example.ssenior.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="Service")
@Data
@NoArgsConstructor
public class ServiceDetails {


@Id
@GeneratedValue(strategy = GenerationType.AUTO)

private int id;
private String serviceName;
private String description;
private int price;
}
