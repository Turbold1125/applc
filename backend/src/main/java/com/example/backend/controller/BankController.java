package com.example.backend.controller;

import com.example.backend.model.Bank;
import com.example.backend.service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/banks")
@CrossOrigin("*")
public class BankController {
    @Autowired
    private BankService bankService;

    @PostMapping("/create")
    public Bank createBank(@RequestBody Bank bank) {
        return bankService.createBank(bank);
    }

    @GetMapping("/all")
    public List<Bank> getAllBanks() {
        return bankService.getAllBanks();
    }
}
