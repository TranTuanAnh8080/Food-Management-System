package com.example.Back_End.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
// DTO được sử dụng để phản hồi (response) API
// Truyền dữ liệu giữa máy khách (client) và máy chủ (server)
// Là cầu nối giữa "Controller Layer" và "Service Layer"
public class EmployeeDTO {

    private Long id;

    private String firstName;
    private String lastName;

    private String email;


    public EmployeeDTO() {
    }

    public EmployeeDTO(Long id, String firstName, String lastName, String email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }
}
