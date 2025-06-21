
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteEmployee, listEmployees } from "../Services/EmployeesService.js";
import popup from '../assets/image/tick.png'
import "../styles/pop-up.css"
const ListEmployeesComponent = () => {

    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState("");

    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };
    //ĐIỀU HƯỚNG TỚI URL CỤ THỂ
    const navigator = useNavigate();


    const getAllEmployees = async () => {
        try {
            //chờ phản hồi API từ backend
            const response = await listEmployees();
            setEmployees(response.data);
        } catch (error) {
            console.error("Error fetching employees:", error);
            setError("Failed to load employees."); // Update error state
        }
    };

    //useEffect: Hook dùng để ktra, phản hồi HTTP
    // LẤY RA DANH SÁCH EMPLOYEES
    useEffect(() => {
        getAllEmployees();
    }, []);



    const addNewEmployee = () => {
        navigator('/add-employee');
    }

    const updateEmployee = (id) => {
        navigator(`/update-employee/${id}`);
    }



    //XÓA EMPLOYEE DỰA TRÊN ID
    const deleteEmployees = async (id) => {
        if (id) {
            try {
                const response = await deleteEmployee(id);
                console.warn("You've already deleted employee with id: " + id + " successfully!", response.status);
                getAllEmployees(); // in ra danh sách nhân viên sau khi xóa
            } catch (error) {
                console.error(error);
            }
        }
        //XUẤT HIEN POP-UP
        openPopup();
    }



    return (
        <div className="container">
            <h2 className="text-center mt-5">List of Employees</h2>

            <button type="button" className="btn btn-primary mb-2"
                onClick={addNewEmployee}>Add Employee</button>
            <table className="table table-striped table-border text-center mt-2">
                <thead>
                    <tr>
                        <th className="table-primary">ID</th>
                        <th className="table-primary">First Name</th>
                        <th className="table-primary">Last Name</th>
                        <th className="table-primary">Email</th>
                        <th className="table-primary">Actions</th>

                    </tr>
                </thead>
                <tbody className="text-center">
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
                                    <button className="btn btn-danger ms-3"
                                        onClick={() => deleteEmployees(employee.id)}

                                    >Delete</button>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <div className="container-popup">
                {isPopupOpen && (
                    <div className="overlay">

                        <div className="popup open-popup">
                            <img src={popup} alt="popup" />
                            <h2>Deleted Successfully</h2>
                            <p>You have already deleted the employee successfully!</p>
                            <button type="button" onClick={closePopup}>
                                OK
                            </button>
                        </div>

                    </div>
                )}
            </div>

        </div>

    );
}

export default ListEmployeesComponent