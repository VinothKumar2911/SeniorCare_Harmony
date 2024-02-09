package com.example.ssenior.services;



import com.example.ssenior.model.UserTable;
import com.example.ssenior.repo.UserTableRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsertableService {

    @Autowired
    private UserTableRepo userTableRepo;

    public List<UserTable> getAllUsers() {
        return userTableRepo.findAll();
    }

    public Optional<UserTable> getUserById(int userId) {
        return userTableRepo.findById(userId);
    }

    public UserTable createUser(UserTable user) {
        return userTableRepo.save(user);
    }

    public UserTable updateUser(int userId, UserTable userDetails) {
        if (userTableRepo.existsById(userId)) {
            userDetails.setUserId(userId);
            return userTableRepo.save(userDetails);
        } else {
            throw new RuntimeException("User not found with id: " + userId);
        }
    }

    public void deleteUser(int userId) {
        userTableRepo.deleteById(userId);
    }
}

