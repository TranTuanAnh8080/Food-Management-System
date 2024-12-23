package com.example.demo.student;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.Period;

@Entity
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String email;

    @Transient // JPA sẽ bỏ qua thuộc tính có annotation là Transient (tự động tính toán độ tuổi)
    private Integer age;

    public Student(Integer id, String name, String email) {

        this.id = id;
        this.name = name;
        this.email = email;
    }

    public Student(String name, String email) {

        this.name = name;
        this.email = email;
    }

    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }



    public void setAge(Integer age) {
        this.age = age;
    }
}
