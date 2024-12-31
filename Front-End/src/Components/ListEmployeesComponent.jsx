
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { listEmployees } from "../Services/EmployeesService.js";
const ListEmployeesComponent = () => {

    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState("");

  
    //ĐIỀU HƯỚNG TỚI URL CỤ THỂ
    const navigator = useNavigate();

    //useEffect: Hook dùng để ktra, phản hồi HTTP
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                //chờ phản hồi API
                const response = await listEmployees();
                setEmployees(response.data);
            } catch (error) {
                console.error("Error fetching employees:", error);
                setError("Failed to load employees."); // Update error state
            }
        };

        fetchEmployees();
    }, []);

    const addNewEmployee = () => {
        navigator('/add-employee');
    }

    const updateEmployee = (id) => {
        navigator(`/update-employee/${id}`);
    }

    return (
        <div className="container">
            <h2 className="text-center mt-5">List of Employees</h2>

            <button type="button" className="btn btn-primary mb-2"
                onClick={addNewEmployee}>Add Employee</button>
            <table className="table table-primary table-border">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className="btn btn-info"
                                        onClick={() => updateEmployee(employee.id)}
                                    >Update</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListEmployeesComponent