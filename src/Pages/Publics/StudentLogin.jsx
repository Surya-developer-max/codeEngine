import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function StudentLogin() {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setLoginData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleLogin(e) {
        e.preventDefault();
        if (loginData.username == "Student" && loginData.password == "S1234") {
            navigate("/student/coding");
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

                <h1 className="text-3xl font-bold text-center mb-2">
                    Student Login
                </h1>

                <p className="text-center text-gray-500 mb-8">
                    Sign in to continue
                </p>

                <form onSubmit={handleLogin} className="space-y-5">

                    <div>
                        <label className="block mb-2 font-medium">
                            Username
                        </label>

                        <input
                            type="text"
                            name="username"
                            value={loginData.username}
                            onChange={handleChange}
                            placeholder="Enter username"
                            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={loginData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>

                <div className="text-center mt-6">
                    <Link
                        to="/"
                        className="text-blue-600 hover:underline"
                    >
                        ← Back to Home
                    </Link>
                </div>

            </div>
        </div>
    );
}