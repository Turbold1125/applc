package com.example.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
public class Currency {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String code;
}
