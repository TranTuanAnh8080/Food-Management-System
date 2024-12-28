package com.example.Back_End.service.implementation;

import com.example.Back_End.dto.EmployeeDTO;
import com.example.Back_End.entity.Employee;
import com.example.Back_End.exception.ResourceNotFoundException;
import com.example.Back_End.mapper.EmployeeMapper;
import com.example.Back_End.repository.EmployeeRepository;
import com.example.Back_End.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    // THÊM MỚI
    @Override
    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDTO);
        //LƯU ĐỐI TƯỢNG employee vào cơ sở dữ liệu (save)
        Employee savedEmployee = employeeRepository.save(employee);
        //phản hồi lại phía Controller
        return EmployeeMapper.mapToEmployeeDTO(savedEmployee);
    }

    // TÌM KIẾM DỰA TRÊN ID
    @Override
    public EmployeeDTO getEmployeeById(Long employeeID) {
        //lấy ra đối tượng dựa trên id tìm kiếm
        Employee employeeByID = employeeRepository.findById(employeeID)
                .orElseThrow(() -> new ResourceNotFoundException("There is no Employee ID existed " + employeeID));

        return EmployeeMapper.mapToEmployeeDTO(employeeByID);
    }

    @Override
    public List<EmployeeDTO> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();

        return employees.stream().map(EmployeeMapper::mapToEmployeeDTO)
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDTO updateEmployee(Long employeeUpdatedID, EmployeeDTO updatedEmployee) {

        Employee employee = employeeRepository.findById(employeeUpdatedID)
                .orElseThrow(() -> new ResourceNotFoundException("There is no Employee ID existed " + employeeUpdatedID));

        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());

        // LƯU MỚI DỮ LIỆU VÀO LẠI DATABASE
        Employee newUpdatedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDTO(newUpdatedEmployee);
    }

    @Override
    public void deleteEmployeeById(Long employeeIDDeleted) {
        boolean exists = employeeRepository.existsById(employeeIDDeleted);
        if (!exists) {
            throw new ResourceNotFoundException("Employee with ID " + employeeIDDeleted + " does not exist.");
        }
        employeeRepository.deleteById(employeeIDDeleted);
    }


}
