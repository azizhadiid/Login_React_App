import Footer from "../components/Footer";
import Navbar from "../components/Header";
import ilustrasi1 from "./public/img/ilustrasi 1.svg";

function Landing() {
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
                            <p className="text-lg md:text-xl mt-6 text-gray-600">
                                Plan, track, and complete your daily tasks efficiently with our intuitive and modern task manager.
                            </p>
                            <div className="mt-8 md:mt-12">
                                <button className="py-4 px-10 bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-md transition-all duration-300">
                                    Get Started
                                </button>
                            </div>
                            <p className="mt-4 text-sm text-gray-500">
                                Boost your productivity one task at a time.
                            </p>
                        </div>

                        {/* Image Area */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <img
                                src={ilustrasi1}
                                alt="Task Management Illustration"
                                className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-auto"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Landing
