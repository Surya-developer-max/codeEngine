import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SuperAdmin() {
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
        if (loginData.username == "Super@Admin" && loginData.password == "SA1234") {
            navigate("/student/coding");
        }
    }

    return (
        <div className="h-screen  grid lg:grid-cols-[1fr_2fr] ">
            <div className="bg-[#233144] flex flex-col items-center justify-around ">
                <h1 className="font-bold text-4xl w-[80%] mt-19 text-white">Strategic Oversight & Core Infrastructure</h1>
                <div className="space-y-10 w-max flex flex-col items-center">
                    <div className="flex  gap-2 border border-[var(--border)] bg-[#2A374A] rounded-xl max-w-[80%] p-5 ">
                        <div>
                            <p className="text-4xl text-blue-300"><i className="ri-building-fill"></i></p>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">Global System Logs</h1>
                            <p className="text-gray-300"> Real-time auditing of every transaction and system event across all nodes.</p>
                        </div>
                    </div>
                    <div className="flex  gap-2 border border-[var(--border)] bg-[#2A374A] rounded-xl w-[80%] p-5 ">
                        <div>
                            <p className="text-4xl text-blue-300"><i className="ri-bank-fill"></i></p>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">Institution Configuration</h1>
                            <p className="text-gray-300"> Central management for multi-tenant educational structures and schemas.</p>
                        </div>
                    </div>
                    <div className="flex  gap-2 border border-[var(--border)] bg-[#2A374A] rounded-xl w-[80%] p-5 ">
                        <div>
                            <p className="text-4xl text-blue-300"><i className="ri-shield-line"></i></p>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">Root Level Permissions</h1>
                            <p className="text-gray-300"> Absolute control over administrative roles and global security protocols.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#F8F9FF] flex flex-col justify-center items-center">
                <div className="max-w-[50%]">
                    <h1 className="text-5xl  text-blue-800 font-bold">Super Admin Secure Entry</h1>
                    <p>Verify your identity to access the root management console.</p>
                    <div className="mt-10">

                        <form action="" className="space-y-5" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="" className="font-bold ">@ Admin Email Address</label>
                                <br />
                                <input value={loginData.username} onChange={(e) => { handleChange('username', e.target.value) }} type="text" className="border w-full p-2 rounded border-[var(--border)] " placeholder="xxxxx@gmail.com" />
                            </div>
                            <div className="relative">
                                <button type="button" onClick={() => { setShowPassword(!showPassowrd) }} className="absolute hover:cursor-pointer top-1/2 right-3">{showPassowrd ? <i className="ri-eye-line"></i> : <i className="ri-eye-off-line"></i>}</button>
                                <label htmlFor="" className="font-bold ">Secure Token</label>
                                <br />
                                <input value={loginData.password} onChange={(e) => { handleChange('password', e.target.value) }} type={showPassowrd ? "text" : "password"} className="border w-full p-2 rounded border-[var(--border)] " placeholder="xxxxxx" />
                            </div>
                            <button type="submit" className="w-full py-3 bg-blue-900 hover:cursor-pointer active:scale-99 text-white font-bold rounded-xl">Secure Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}