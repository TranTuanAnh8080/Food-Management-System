package com.example.Back_End.service.implementation;

import com.example.Back_End.dto.EmployeeDTO;
import com.example.Back_End.entity.Employee;
import com.example.Back_End.mapper.EmployeeMapper;
import com.example.Back_End.repository.EmployeeRepository;
import com.example.Back_End.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDTO);
        //LƯU ĐỐI TƯỢNG employee vào cơ sở dữ liệu (save)
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDTO(savedEmployee);
    }
}
