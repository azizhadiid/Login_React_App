import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/login', values);
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token)
                navigate('/');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='shadow-lg px-8 py-5 border w-96'>
                <h2 className='text-lg font-bold mb-4'>Login</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-gray-700'>E-mail</label>
                        <input type="email" placeholder='Enter email' className='w-full px-3 py-2 border' name='email' onChange={handleChanges} />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password" className='block text-gray-700'>Password</label>
                        <input type="password" placeholder='Enter password' className='w-full px-3 py-2 border' name='password' onChange={handleChanges} />
                    </div>
                    <button className='w-full bg-green-600 text-white py-2'>Login</button>
                </form>

                <div className='text-center'>
                    <span className=''>Don't have account?</span>
                    <Link to='/register' className='text-blue-500'>Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
