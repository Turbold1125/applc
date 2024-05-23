package com.example.backend.controller;

import com.example.backend.model.Bank;
import com.example.backend.model.Currency;
import com.example.backend.service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/banks")
@CrossOrigin("*")
public class BankController {
    @Autowired
    private BankService bankService;

    @PostMapping("create")
    public ResponseEntity<Bank> createBank(@RequestBody Bank bank) {
        Bank createBank = bankService.createBank(bank);
        return ResponseEntity.ok(bank);
    }

    @GetMapping("/all")
    public List<Bank> getAllBanks() {
        return bankService.getAllBanks();
    }
}
