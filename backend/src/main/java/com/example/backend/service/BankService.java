package com.example.backend.service;

import com.example.backend.model.Bank;
import com.example.backend.repository.BankRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BankService {

    @Autowired
    private BankRepository bankRepository;

    public Bank createBank(Bank bank) {
        return bankRepository.save(bank);
    }
    public List<Bank> getAllBanks() {
        return bankRepository.findAll();
    }
}
