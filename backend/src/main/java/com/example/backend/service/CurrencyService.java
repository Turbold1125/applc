package com.example.backend.service;

import com.example.backend.model.Bank;
import com.example.backend.model.Currency;
import com.example.backend.repository.CurrencyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CurrencyService {
    @Autowired
    private CurrencyRepository currencyRepository;

    public Currency createCurrency(Currency currency) {
        return currencyRepository.save(currency);
    }

    public List<Currency> getAllCurrencies() {
        return currencyRepository.findAll();
    }
}
