
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { listEmployees } from "../services/EmployeesService";
const ListEmployeesComponent = () => {

    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState("");

    const navigator = useNavigate();

    //useEffect: Hook dùng để ktra, phản hồi HTTP
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
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

    return (
        <div className="container">
            <h2 className="text-center mt-5">List of Employees</h2>

            <button type="button" className="btn btn-primary mb-2"
            onClick={addNewEmployee}>Add Employee</button>
            <table className="table table-primary table-border">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.id}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListEmployeesComponent