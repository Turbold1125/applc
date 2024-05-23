package com.example.backend.service;

import com.example.backend.model.Users;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public Users register(Users users) {
        users.setPassword(passwordEncoder.encode(users.getPassword()));
        return userRepository.save(users);
    }

    public Users login(Users user) {
        Users existingUser = findByUsername(user.getUsername());
        if (existingUser != null && passwordEncoder.matches(user.getPassword(), existingUser.getPassword())) {
            String sessionId = UUID.randomUUID().toString();
            existingUser.setSessionId(sessionId);
            userRepository.save(existingUser);
            return existingUser;
        }
        return null;
    }

    public Users findBySessionId(String sessionId) {
        return userRepository.findBySessionId(sessionId);
    }

    public Users findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public List<Users> findAll() {
        return userRepository.findAll();
    }
}
