// Import necessary modules
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './style.css';

const SignUp = () => {
    // State variables for form fields
    const [Fname, setFname] = useState("");
    const [Lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    // Function to handle form submission
    const collectData = async () => {
        console.log(Fname, Lname, email, password);
        try {
            // Send POST request to register endpoint
            let response = await fetch("http://localhost:5000/register", {
                method: "post",
                body: JSON.stringify({ Fname, Lname, email, password }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            // Parse response JSON
            let result = await response.json();

            // Check if registration was successful
            if (response.status === 400 && result.message === 'Email already exists') {
                alert('This email is already registered. Please use a different email or log in.');
            } else if (response.ok) {
                localStorage.setItem("user", JSON.stringify(result.user));
                // Navigate to the login page after successful signup
                navigate('/Login');
            } else {
                throw new Error(result.message || 'An unknown error occurred.');
            }
        } catch (error) {
            console.error("Registration error:", error);
            alert(error.message);
        }
    };
    
    // JSX for the signup form
    return (
        <div className="register">
            <div className="SIcontainer w-50 text-center">
                <div className="components bg-dark p-5 " style={{ "--bs-bg-opacity": .5 }}>
                    <div className="mb-3 row">
                        <label className="col-12 col-md-6 col-form-label text-light text-start"><h5>First Name : </h5></label>
                        <div className="col-12 col-md-6">
                            <input type="text" className="SIinputBox form-control " placeholder="Enter First Name" value={Fname} onChange={(e) => setFname(e.target.value)} />
                        </div>

                        <label className="col-12 col-md-6 col-form-label text-light text-start"><h5>Last Name : </h5></label>
                        <div className="col-12 col-md-6">
                            <input type="text" className="SIinputBox form-control " placeholder="Enter Last Name" value={Lname} onChange={(e) => setLname(e.target.value)} />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label className="col-12 col-md-6 col-form-label text-light text-start"><h5>Email : </h5></label>
                        <div className="col-12 col-md-6">
                            <input type="text" className="SIinputBox form-control mb-2" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    
                        <label className="col-12 col-md-6 col-form-label text-light text-start"><h5>Password : </h5></label>
                        <div className="col-12 col-md-6">
                            <input type="password" className="SIinputBox form-control mb-2" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    
                    <button className="SIappButton btn btn-success w-100 mb-4" onClick={collectData}>Sign Up</button>
                    <hr className="border border-secondary border-2 opacity-75"/>
                    <div className="mb-3 row">
                        <label className="col-sm-12 col-form-label text-light"><h6>If you already registered a account.</h6></label>
                        <div className="col-xlg-10">
                            <Link to="/Login" className="btn  btn-dark w-100">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Export SignUp component
export default SignUp;
