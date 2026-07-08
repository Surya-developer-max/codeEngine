import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function StudentLogin() {
    const navigate = useNavigate();
    const [showPassowrd, setShowPassword] = useState(false)
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });

    function handleChange(name, value) {
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
        <div className="min-h-screen  grid lg:grid-cols-[1fr_2fr] ">
            <div className="bg-[#233144] flex flex-col items-center justify-around ">
                <div className="text-white w-max space-y-5">
                    <h1 className="font-bold text-4xl w-[80%] mb-10 text-white">Master the Future of Code.</h1>
                    <p><i className=" text-2xl me-3 text-blue-300 ri-code-s-slash-line"></i>Real-time Coding Arena</p>
                    <p><i className=" text-2xl me-3 text-blue-300 ri-survey-line"></i>assignment_turned_in</p>
                    <p><i className=" text-2xl me-3 text-blue-300 ri-bar-chart-2-line"></i>analytics</p>
                    <p><i className=" text-2xl me-3 text-blue-300 ri-speak-ai-line"></i>Skill Analytics Dashboard</p>
                    <p><i className=" text-2xl me-3 text-blue-300 ri-id-card-fill"></i>verified_user</p>
                    <p><i className=" text-2xl me-3 text-blue-300 ri-line-chart-line"></i>Industry-Recognized Certs</p>
                </div>
            </div>
            <div className="bg-[#F8F9FF] flex h-full justify-center items-center">
                <div className="max-w-[50%]">
                    <h1 className="text-5xl  text-blue-800 font-bold">Student Login</h1>
                    <p>Access your personalized learning path and assessments.</p>
                    <div className="mt-10">

                        <form action="" className="space-y-5" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="" className="font-bold ">Student ID</label>
                                <br />
                                <input value={loginData.username} onChange={(e) => { handleChange('username', e.target.value) }} type="text" className="border w-full p-2 rounded border-[var(--border)] " placeholder="xxxxx@gmail.com" />
                            </div>
                            <div className="relative">
                                <button type="button" onClick={() => { setShowPassword(!showPassowrd) }} className="absolute hover:cursor-pointer top-1/2 right-3">{showPassowrd ? <i className="ri-eye-line"></i> : <i className="ri-eye-off-line"></i>}</button>
                                <label htmlFor="" className="font-bold ">Password</label>
                                <br />
                                <input value={loginData.password} onChange={(e) => { handleChange('password', e.target.value) }} type={showPassowrd ? "text" : "password"} className="border w-full p-2 rounded border-[var(--border)] " placeholder="xxxxxx" />
                            </div>
                            <button type="submit" className="w-full py-3 bg-blue-900 hover:cursor-pointer active:scale-99 text-white font-bold rounded-xl">Secure Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}