// package com.example.ssenior.repo;

// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;

// import com.example.ssenior.model.UserTable;

// @Repository
// public interface UserTableRepo extends JpaRepository<UserTable,Integer>{

// }




package com.example.ssenior.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.ssenior.model.UserTable;

@Repository
public interface UserTableRepo extends JpaRepository<UserTable, Integer> {
}
