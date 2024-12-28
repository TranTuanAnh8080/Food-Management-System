package com.example.Back_End.service;

import com.example.Back_End.dto.EmployeeDTO;

import java.util.List;

public interface EmployeeService {

    EmployeeDTO createEmployee(EmployeeDTO employeeDTO);


    EmployeeDTO getEmployeeById(Long employeeID);

    List<EmployeeDTO> getAllEmployees();

    EmployeeDTO updateEmployee(Long employeeUpdatedID, EmployeeDTO updatedEmployee);

    void deleteEmployeeById(Long employeeIDDeleted);
}
