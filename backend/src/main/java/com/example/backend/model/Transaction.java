package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Data
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JsonBackReference
    private Users users;

    @ManyToOne
    private Bank bank;

    @ManyToOne
    private Currency currency;

    private String receiverBankAccount;

    private String receiverUsername;

    private Double amount;

    private String description;

    private Date transactionDate = new Date();

}
