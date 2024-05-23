package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    private Double balance = 0.0;

    private Long accounts;

    private String sessionId;

    @OneToMany(mappedBy = "users")
    @JsonManagedReference
    private List<Transaction> transactions;
}
