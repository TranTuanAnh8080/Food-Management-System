package com.example.Back_End.controller;


import com.example.Back_End.dto.EmployeeDTO;
import com.example.Back_End.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
// "BẮT BUỘC" phải có từ khóa 'path'
@RequestMapping(path = "/api/employees")
@AllArgsConstructor
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;


    //ADD NEW EMPLOYEE
    @PostMapping
    public ResponseEntity<EmployeeDTO> addNewEmployee(@RequestBody EmployeeDTO employeeDTO) {
        // khởi tạo đối tượng và lưu vào trong database
        EmployeeDTO savedEmployee = employeeService.createEmployee(employeeDTO);
        //phản hồi trạng thái (HttpStatus) với từ khóa "new"
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    //GET EMPLOYEE BY ID
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDTO> getEmployeeByID(@PathVariable("id") Long employeeID) {
        EmployeeDTO employeeExisted = employeeService.getEmployeeById(employeeID);

        //update trạng thái là về là 200 (ok)
        return ResponseEntity.ok(employeeExisted);

    }

    //GET ALL EMPLOYEES
    @GetMapping
    public ResponseEntity<List<EmployeeDTO>> getAllEmployees() {

        List<EmployeeDTO> employees = employeeService.getAllEmployees();

        return ResponseEntity.ok(employees);
    }

    //UPDATE EMPLOYEE
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDTO> updateEmployee(@PathVariable("id") Long id,
                                                      @RequestBody EmployeeDTO employeeUpdatedDTO) {

        EmployeeDTO employeeUpdated = employeeService.updateEmployee(id, employeeUpdatedDTO);

        return ResponseEntity.ok(employeeUpdated);
    }

    ///DELETE EMPLOYEE
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployeeById(@PathVariable("id") Long IDEmployeeDeleted) {
        employeeService.deleteEmployeeById(IDEmployeeDeleted);
        return ResponseEntity.ok("Employee Deleted Successfully!!!");
    }

}
