// Import necessary modules
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './style.css';

const Login = () => {
    // State variables for form fields
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Function to handle login submission
    const handleLogin = async () => {
        let result = await fetch("http://localhost:5000/login", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        console.warn(result);
        if (result.email) {
            localStorage.setItem("user", JSON.stringify(result));
            // Navigate to the signup page after successful login
            navigate("/");
        } else {
            alert("Please Enter correct details")
        }
    }
    
    // JSX for the login form
    return (
        <div className="login">
            <div className="SIcontainer w-25 text-center">
                <div className="components bg-dark p-5" style={{ "--bs-bg-opacity": .5 }}>
                    <div className="mb-3 row">
                        <label  className="col-sm-12 col-form-label text-light text-start"><h5>Email: </h5></label>
                        <div className="col-xlg-10">
                            <input type="text" className="inputBox form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label  className="col-sm-12 col-form-label text-light text-start"><h5>Password: </h5></label>
                        <div className="col-xlg-10">
                            <input type="password" className="inputBox form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
                        </div>
                    </div>

                    <button className="appButton btn btn-success w-100 mb-4" onClick={handleLogin}>Login</button>
                    <hr className="border border-secondary border-2 opacity-75" />
                    <div className="mb-3 row">
                        <label  className="col-sm-12 col-form-label text-light text-center"><h6>If you have not registered yet.</h6></label>
                        <div className="col-xlg-10">
                            <Link to="/Signup" className="btn btn-dark w-100">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Export Login component
export default Login;
