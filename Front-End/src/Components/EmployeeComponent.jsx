import React, { useState } from "react";

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");


    const handleFirstName = (e) => setFirstName(e.target.value);


    const handleLastName = (e) => setLastName(e.target.value);


    const handleEmail = (e) => setEmail(e.target.value);


    const saveEmployee = () => {
        const addedEmployee = { firstName, lastName, email };
        console.log(addedEmployee);
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="text-center text-success">
                        Add Employee
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">First Name:</label>
                                <input type="text"
                                    placeholder="Enter Employee First Name"
                                    name='firstName'
                                    value={firstName}
                                    className="form-control"
                                    onChange={handleFirstName}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Last Name:</label>
                                <input type="text"
                                    placeholder="Enter Employee Last Name"
                                    name='lastName'
                                    value={lastName}
                                    className="form-control"
                                    onChange={handleLastName}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Email:</label>
                                <input type="text"
                                    placeholder="Enter Employee Email"
                                    name='email'
                                    value={email}
                                    className="form-control"
                                    onChange={handleEmail}
                                />
                            </div>

                            <div className="text-center">
                                <button type="button" className="btn btn-success"
                                    onClick={saveEmployee}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeComponent