package com.andrews.rstyle.controllers;

import com.andrews.rstyle.models.User;
import com.andrews.rstyle.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class MyController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/api/cv")
    @CrossOrigin(origins = "http://localhost:3000")
    public Optional<User> getCV() {
        Optional<User> test = userRepository.findById(1);
        return test;
    }

}
