package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
@Entity
@Data
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "users_id", nullable = false)
    private Users users;

    @ManyToOne
    @JoinColumn(name = "bank_id", nullable = false)
    private Bank bank;

    @ManyToOne
    @JoinColumn(name = "currency_id", nullable = false)
    private Currency currency;

    private String receiverBankAccount;

    private String receiverUsername;

    private Double amount;

    private String description;

    private Date transactionDate = new Date();

    public Transaction() {}

    public Transaction(Users users, Bank bank, Currency currency, String receiverBankAccount, String receiverUsername, Double amount, String description, Date transactionDate) {
        this.users = users;
        this.bank = bank;
        this.currency = currency;
        this.receiverBankAccount = receiverBankAccount;
        this.receiverUsername = receiverUsername;
        this.amount = amount;
        this.description = description;
        this.transactionDate = transactionDate;
    }
}
