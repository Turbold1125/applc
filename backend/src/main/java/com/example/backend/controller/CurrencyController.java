package com.example.backend.controller;

import com.example.backend.model.Bank;
import com.example.backend.model.Currency;
import com.example.backend.service.CurrencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/currencies")
public class CurrencyController {
    @Autowired
    private CurrencyService currencyService;

    @PostMapping("/create")
    public Currency createCurrency(@RequestBody Currency currency) {
        return currencyService.createCurrency(currency);
    }

    @GetMapping("/all")
    public List<Currency> getAllCurrencies() {
        return currencyService.getAllCurrencies();
    }
}
