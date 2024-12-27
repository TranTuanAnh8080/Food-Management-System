package com.example.Back_End.mapper;

import com.example.Back_End.dto.EmployeeDTO;
import com.example.Back_End.entity.Employee;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

// chuyển chuỗi JSON (requestBody) thành DTO cho springboot xử lý
// từ DTO chuyển thành dạng Entity để lưu vào CSDL
public class EmployeeMapper {

    // chuyển Entity (Employee) thành DTO
    public static EmployeeDTO mapToEmployeeDTO(Employee employee) {
        return new EmployeeDTO(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    public static Employee mapToEmployee(EmployeeDTO employeeDTO) {
        return new Employee(
                employeeDTO.getId(),
                employeeDTO.getFirstName(),
                employeeDTO.getLastName(),
                employeeDTO.getEmail()
        );
    }

}
