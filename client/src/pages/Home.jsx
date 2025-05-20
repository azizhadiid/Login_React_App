import axios from 'axios';
import { Link } from 'lucide-react';
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
        <div className="font-sans">
            <Navbar />
            <main className="text-gray-900 bg-white min-h-screen">
                <section className="pt-16 md:pt-28 lg:pt-40 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                        {/* Text Area */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                                Organize Your Day with{" "}
                                <span className="text-teal-500">ToDoWeb</span>
                            </h1>
                            <p className="text-lg md:text-xl mt-6 text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
                                Manage your tasks effortlessly with our modern and intuitive planner.
                            </p>
                            <div className="mt-8 md:mt-12">
                                <Link className="py-4 px-10 bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-md transition-all duration-300" to="/login">
                                    Get Started
                                </Link>
                            </div>
                            <p className="mt-4 text-sm text-gray-500">
                                Boost your productivity one task at a time.
                            </p>
                        </div>

                        {/* Image Area */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                            <img
                                src={ilustrasi1}
                                alt="Task Management Illustration"
                                className="w-[80%] max-w-sm md:max-w-md lg:max-w-md h-auto ml-0 lg:ml-8"
                            />
                        </div>
                    </div>
                </section>

                {/* Main Fitur */}
                <section id="features" className="py-16 md:py-24 lg:pt-48 lg:pb-40 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-12">Main Features</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <div className="p-8 rounded-lg border border-gray-200 bg-white shadow-md">
                                <p className="font-semibold text-xl text-gray-800">Task Management</p>
                                <p className="mt-4 text-gray-600 text-base">
                                    Easily create, update, and delete tasks. Organize your daily goals with a user-friendly interface that keeps you focused and productive.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="p-8 rounded-lg border border-gray-200 bg-white shadow-md">
                                <p className="font-semibold text-xl text-gray-800">Collaboration</p>
                                <p className="mt-4 text-gray-600 text-base">
                                    Share tasks and collaborate with teammates or family members. Manage projects efficiently with shared lists and real-time updates.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="p-8 rounded-lg border border-gray-200 bg-white shadow-md">
                                <p className="font-semibold text-xl text-gray-800">Deadline & Reminders</p>
                                <p className="mt-4 text-gray-600 text-base">
                                    Set due dates and reminders to stay on track with your tasks. Never miss an important deadline with customizable notifications.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Main fitur */}
            </main>
            <Footer />
        </div>
    );
};

export default Home;
