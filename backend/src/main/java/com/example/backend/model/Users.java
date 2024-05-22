package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
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

    @OneToMany(mappedBy = "users")
    private List<Transaction> transactions;

    public Users() {}

    public Users(String username, String password, Double balance, Long accounts, List<Transaction> transactions) {
        this.username = username;
        this.password =  password;
        this.balance = balance;
        this.accounts = accounts;
        this.transactions = transactions;
    }
}
