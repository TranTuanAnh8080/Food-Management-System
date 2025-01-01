import React, { useEffect, useState } from "react";
import { createEmployee, updateEmployee, updateEmployeeByID } from "../Services/EmployeesService";
import { useNavigate, useParams } from "react-router-dom";
const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    //lấy ra id từ URL sử dụng useParams
    //tham số đã định nghĩa trong Route (:id)
    const { id } = useParams();

    const navigator = useNavigate();

    const [errors, setErrors] = useState({});

    //LẤY RA DỮ LIỆU DỰA TRÊN ID CỦA EMPLOYEE 
    useEffect(() => {
        const fetchEmployeeByID = async () => {
            if (id) {
                try {
                    //chờ phản hồi từ phía API -backend để lấy ra id
                    const response = await updateEmployeeByID(id);
                    setFirstName(response.data.firstName);
                    setLastName(response.data.lastName);
                    setEmail(response.data.email);
                } catch (error) {
                    console.error("Fetching employee by id error !!!", error);
                }
            }
        }
        fetchEmployeeByID();
    }, [id]);

    //FORM XÁC THỰC DỮ LIỆU
    const validationForm = () => {
        let isValid = true;
        const errors = {};

        if (firstName.trim() === "") {
            errors.firstName = "First Name is required!";
            isValid = false;
        }

        if (lastName.trim() === "") {
            errors.lastName = "Last Name is required!";
            isValid = false;
        }

        if (email.trim() === "") {
            errors.email = "Email is required!";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    }


    //THÊM MỚI VÀ UPDATE DỮ LIỆU EMPLOYEE
    //hàm xử lý bất đồng bộ (async -await)
    const saveOrUpdateEmployee = async (e) => {
        e.preventDefault();

        const addedEmployee = { firstName, lastName, email };

        if (validationForm()) {
            try {
                if (id) {
                    //gửi yêu cầu và phản hồi từ API (updateEmployee) - phía backend
                    const response = await updateEmployee(id, addedEmployee);
                    //nếu thành công thì chuyển hướng đến trang employees
                    console.log(response.data);
                    console.log("Object updated successfully!!!");
                    navigator('/employees');
                } else {
                    //chờ yêu cầu và phản hồi từ API (createEmployee) - phía backend
                    const response = await createEmployee(addedEmployee);
                    console.log(response.data);
                    navigator('/employees');
                }
            } catch (error) {
                console.error("Something happened during execution for a while!!!", error);
            }
        } else {
            console.error("You are required to fill out all of fields!!!");
            return;
        }
    };

    const pageTitle = () => {
        if (id) {
            return <h2 className="text-center mt-5">Update Employee</h2>
        } else {
            return <h2 className="text-center mt-5">Add Employee</h2>
        }
    }

    return (


        <div className="container mt-5">

            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">

                    <div className="text-center text-success">
                        {pageTitle()}
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">First Name:</label>
                                <input type="text"
                                    placeholder="Enter Employee First Name"
                                    name='firstName'
                                    value={firstName}
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                        if (errors.firstName) {
                                            //nếu có lỗi và người dùng bắt đầu nhập liệu thì xóa lỗi
                                            //firstName: "" - trạng thái rỗng
                                            setErrors({ ...errors, firstName: "" })
                                        }
                                    }}
                                />

                                <div className="invalid-feedback">{errors.firstName}</div>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Last Name:</label>
                                <input type="text"
                                    placeholder="Enter Employee Last Name"
                                    name='lastName'
                                    value={lastName}
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                    onChange={(e) => {
                                        setLastName(e.target.value);
                                        if (errors.lastName) {
                                            //nếu có lỗi và người dùng bắt đầu nhập liệu thì xóa lỗi
                                            setErrors({ ...errors, lastName: "" })
                                        }
                                    }}
                                />

                                <div className="invalid-feedback">{errors.lastName}</div>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Email:</label>
                                <input type="text"
                                    placeholder="Enter Employee Email"
                                    name='email'
                                    value={email}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}

                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (errors.email) {
                                            //nếu có lỗi và người dùng bắt đầu nhập liệu thì xóa lỗi
                                            setErrors({
                                                ...errors, email: ""
                                            })
                                        }
                                    }}
                                />
                                <div className="invalid-feedback">{errors.email}</div>

                            </div>
                            <div className="text-center">
                                <button type="button" className="btn btn-success "
                                    onClick={saveOrUpdateEmployee}>Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeComponent