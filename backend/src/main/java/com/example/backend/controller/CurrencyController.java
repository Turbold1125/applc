package com.example.backend.controller;

import com.example.backend.model.Bank;
import com.example.backend.model.Currency;
import com.example.backend.model.Transaction;
import com.example.backend.service.CurrencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/currencies")
public class CurrencyController {

    @Autowired
    private CurrencyService currencyService;

    @PostMapping("create")
    public ResponseEntity<Currency> createCurrency(@RequestBody Currency currency) {
        Currency createCurrency = currencyService.createCurrency(currency);
        return ResponseEntity.ok(createCurrency);
    }

    @GetMapping("/all")
    public List<Currency> getAllCurrencies() {
        return currencyService.getAllCurrencies();
    }
}
