package com.example.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Model.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
