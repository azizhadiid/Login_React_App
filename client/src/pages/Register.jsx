import React from 'react';

const Register = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='shadow-lg px-8 py-5 border w-96'>
                <h2 className='text-lg font-bold mb-4'>Register</h2>
                <form action="">
                    <div className='mb-4'>
                        <label htmlFor="username" className='block text-gray-700'>Username</label>
                        <input type="text" placeholder='Enter Username' className='w-full px-3 py-2 border' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-gray-700'>E-mail</label>
                        <input type="email" placeholder='Enter email' className='w-full px-3 py-2 border' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password" className='block text-gray-700'>Password</label>
                        <input type="password" placeholder='Enter password' className='w-full px-3 py-2 border' />
                    </div>
                    <button className='w-full bg-green-600 text-white py-2'>Register</button>
                </form>

                <div className='text-center'>
                    <span className=''>Already have account?</span>
                    <a href="#">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Register;
