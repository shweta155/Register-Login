import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const LogIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // form submit 

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/login', { email, password })
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch((err) => {
                console.log(err);

            })

    }

    return (
        <>

            <form className='m-3 w-25 p' onSubmit={handleSubmit}>
                <h3 className='text-center'>LogIn</h3>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input
                        name='password'
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </div>
            </form>
            <p className="forgot-password text-right ">
                registered here
            </p>
            <Link to='/register' type="submit" className="btn btn-primary">
                sign Up
            </Link>
        </>
    )
}
export default LogIn;