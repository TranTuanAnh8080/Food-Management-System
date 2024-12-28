
import React, { useState, useEffect } from "react";
import { listEmployees } from "../Services/EmployeesService";
const ListEmployeesComponent = () => {

    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState("");
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

    return (
        <>
            <h2>List of Employees</h2>

            <table>
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
        </>
    );
}

export default ListEmployeesComponent