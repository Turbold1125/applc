package com.example.backend.repository;

import com.example.backend.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Users, Long> {
    Users findByUsername(String username);
    Users findBySessionId(String sessionId);
}
