import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const fetchUser = async () => {
        try {
            const token = localStorage.getItem('token')
            const response = await axios.get('http://localhost:300/auth/home', {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            if (response.status !== 200) {
                navigate('/login')
            }
        } catch (error) {
            navigate('/login')
            console.log(error);
        }
    }


    useEffect(() => {
        fetchUser();
    }, []);
    return (
        <div className=''>
            <p className='text-3xl text-blue-500'>Home</p>
        </div>
    );
};

export default Home;
