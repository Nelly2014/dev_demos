package com.example.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
