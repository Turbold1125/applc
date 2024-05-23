package com.example.backend.controller;

import com.example.backend.model.Users;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<Users> registerUser(@RequestBody Users users) {
        Users registeredUser = userService.register(users);
        return ResponseEntity.status(HttpStatus.CREATED).body(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody Users user) {
        Users loggedInUser = userService.login(user);
        if (loggedInUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
        return ResponseEntity.ok(loggedInUser.getSessionId());
    }

    @GetMapping("/{username}")
    public ResponseEntity<Users> getUserById(@PathVariable String username) {
        Users user = userService.findByUsername(username);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(user);
    }

    @GetMapping("/session/{sessionId}")
    public ResponseEntity<Users> getUserBySessionId(@PathVariable String sessionId) {
        Users user = userService.findBySessionId(sessionId);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(user);
    }
}
