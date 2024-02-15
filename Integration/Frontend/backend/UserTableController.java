// package com.example.ssenior.controller;

// import com.example.ssenior.model.UserTable;
// import com.example.ssenior.services.UsertableService;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;
// import java.util.Optional;

// @RestController
// @RequestMapping("/api/v1/users")
// public class UserTableController {

//     @Autowired
//     private UsertableService userTableService;

//     @GetMapping
//     public List<UserTable> getAllUsers() {
//         return userTableService.getAllUsers();
//     }

//     @GetMapping("/{userId}")
//     public ResponseEntity<UserTable> getUserById(@PathVariable int userId) {
//         Optional<UserTable> user = userTableService.getUserById(userId);
//         return user.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
//                 .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
//     }

//     @PostMapping
//     public ResponseEntity<UserTable> createUser(@RequestBody UserTable user) {
//         UserTable createdUser = userTableService.createUser(user);
//         return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
//     }
  

//     @PutMapping("/{userId}")
//     public ResponseEntity<UserTable> updateUser(@PathVariable int userId, @RequestBody UserTable userDetails) {
//         UserTable updatedUser = userTableService.updateUser(userId, userDetails);
//         return new ResponseEntity<>(updatedUser, HttpStatus.OK);
//     }

//     @DeleteMapping("/{userId}")
//     public ResponseEntity<Void> deleteUser(@PathVariable int userId) {
//         userTableService.deleteUser(userId);
//         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//     }
// }





package com.example.ssenior.controller;

import com.example.ssenior.model.UserTable;
import com.example.ssenior.services.UsertableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/users")
@CrossOrigin(origins = "http://localhost:5173") 
public class UserTableController {

    @Autowired
    private UsertableService userTableService;

    @GetMapping
    public List<UserTable> getAllUsers() {
        return userTableService.getAllUsers();
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserTable> getUserById(@PathVariable int userId) {
        Optional<UserTable> user = userTableService.getUserById(userId);
        return user.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<UserTable> createUser(@RequestBody UserTable user) {
        UserTable createdUser = userTableService.createUser(user);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    @PutMapping("/{userId}")
    public ResponseEntity<UserTable> updateUser(@PathVariable int userId, @RequestBody UserTable userDetails) {
        UserTable updatedUser = userTableService.updateUser(userId, userDetails);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable int userId) {
        userTableService.deleteUser(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

