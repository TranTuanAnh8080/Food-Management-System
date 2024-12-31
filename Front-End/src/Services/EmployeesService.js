import axios from "axios";


const REST_API_BASE_URL = "http://localhost:8080/api/employees";

//LẤY RA DANH SÁCH EMPLOYEE
export const listEmployees = () => axios.get(REST_API_BASE_URL);

//THÊM MỚI EMPLOYEE
export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

export const updateEmployeeByID = (employeeID) => axios.get(REST_API_BASE_URL + '/' + employeeID);  