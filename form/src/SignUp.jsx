import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/Register', { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/login')
            })
            .catch(error)
        console.log(error);

    }

    return (
        <>

            <form className='m-3 w-25 p' onSubmit={handleSubmit}>
                <h3 className='text-center'>Sign Up</h3>

                <div className="mb-3">
                    <label>First name</label>
                    <input
                        name='name'
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="form-control rounded-0"
                        placeholder="First name"
                    />
                </div>



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
                        Sign Up
                    </button>
                </div>
            </form>
            <p className="forgot-password text-right ">
                Already registered
            </p>
            <Link to='/login' type="submit" className="btn btn-primary">
                login
            </Link>
        </>
    )
}
export default SignUp;