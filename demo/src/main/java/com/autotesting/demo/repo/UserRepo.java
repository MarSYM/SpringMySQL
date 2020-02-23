package com.autotesting.demo.repo;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.autotesting.demo.domain.Users;


@Repository
@Transactional
public interface UserRepo extends JpaRepository<Users, Integer>{

}
