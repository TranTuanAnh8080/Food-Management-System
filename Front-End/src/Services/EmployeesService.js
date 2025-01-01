import axios from "axios";


const REST_API_BASE_URL = "http://localhost:8080/api/employees";

//LẤY RA DANH SÁCH EMPLOYEE
export const listEmployees = () => axios.get(REST_API_BASE_URL);

//THÊM MỚI EMPLOYEE
export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

//LẤY RA EMPLOYEE THEO ID
export const updateEmployeeByID = (employeeID) => axios.get(REST_API_BASE_URL + '/' + employeeID);  

//CẬP NHẬT EMPLOYEE
export const updateEmployee = (employeeID, employee) => axios.put(REST_API_BASE_URL + '/' + employeeID, employee);

//XÓA EMPLOYEE
export const deleteEmployee = (employeeID) => axios.delete(REST_API_BASE_URL + '/' + employeeID);  

