import Footer from "../components/Footer";
import Navbar from "../components/Header";

function Landing() {
    return (
        <div className="font-sans">
            <Navbar />
            <main className="p-4 text-center">
                <h1 className="text-4xl font-bold">Starter Page</h1>
                <p className="mt-2 text-gray-600">Use this page as a starter for your own custom pages.</p>
            </main>
            <Footer />
        </div>
    )
}

export default Landing
