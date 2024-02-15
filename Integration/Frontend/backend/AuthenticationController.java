



// package com.example.ssenior.controller;

// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.ssenior.dto.request.AuthenticationRequest;
// import com.example.ssenior.dto.request.RegisterRequest;
// import com.example.ssenior.dto.response.AuthenticationResponse;
// import com.example.ssenior.services.AuthenticationService;

// import lombok.RequiredArgsConstructor;

// @RestController
// @RequestMapping("/api/v1/auth")
// @CrossOrigin(origins = "http://localhost:5173") 

// @RequiredArgsConstructor
// public class AuthenticationController {

//     private final AuthenticationService authenticationService;

//     @PostMapping("/register")
//     public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
//         AuthenticationResponse response = authenticationService.register(request);
//         return ResponseEntity.status(HttpStatus.CREATED).body(response);
//     }

//     @PostMapping("/authenticate")
//     public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
//         return ResponseEntity.ok(authenticationService.authenticate(request));
//     }


//     @PostMapping("/api/v1/authenticate")
//     public ResponseEntity<String> authenticate(@RequestBody AuthenticationRequest request) {
     
//         if ("admin@example.com".equals(request.getEmail()) && "admin".equals(request.getPassword())) {
//             return ResponseEntity.ok("User authenticated");
//         } else {
//             return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
//         }
//     }
// }




package com.example.ssenior.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.ssenior.dto.request.AuthenticationRequest;
import com.example.ssenior.dto.request.RegisterRequest;
import com.example.ssenior.dto.response.AuthenticationResponse;

import com.example.ssenior.services.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        AuthenticationResponse response = authenticationService.register(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PostMapping("/authenticate") 
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        AuthenticationResponse response = authenticationService.authenticate(request);
        return ResponseEntity.ok(response);
    }

   
}
