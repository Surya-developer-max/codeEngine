import { useState } from "react";
import { Lock } from "lucide-react";
export default function Profile() {
    const [notifications, setNotifications] = useState({
        email: true,
        lms: true,
        news: false,
    });

    const notificationData = [
        {
            title: "Email Notifications",
            description: "Updates about your grades",
            checked: notifications.email,
            toggle: "email",
        }, {
            title: "LMS Alerts",
            description: "Instant deadline reminders",
            checked: notifications.lms,
            toggle: "lms",
        },
        {
            title: "Institution News",
            description: "Events and campus updates",
            checked: notifications.news,
            toggle: "news",
        },
    ]
    const toggleSwitch = (key) => {
        setNotifications((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    }
    return (
        <div>
            <div className="grid md:grid-cols-2 bg-white border border-[var(--border)] p-5 gap-5 rounded shadow-lg flex-wrap">
                <div className="flex gap-5 items-center sm:flex-nowrap flex-wrap justify-center sm:justify-start">
                    <div className="h-20 w-20 bg-gray-300 rounded-full ">
                    </div>
                    <div>
                        <h1 className="font-bold text-xl">Alex Rivera</h1>
                        <div className="flex  md:gap-5 gap-1 flex-wrap">
                            <p className=" sm:text-md text-xs px-3 bg-green-100 text-green-800 font-bold rounded-full "> FG-2024-089</p>
                            <p className=" sm:text-md text-xs px-3 bg-yellow-100 text-yellow-800 font-bold rounded-full "> BCA-2024-A</p>
                            <p className=" sm:text-md text-xs "> Mumbai, IN</p>

                        </div>
                    </div>
                </div>
                <div className=" flex gap-5 flex-wrap md:justify-end justify-around items-center">
                    <button className="px-10 rounded  active:scale-99 hover:cursor-pointer py-1 border border-[var(--border)] font-bold">Edit Profile</button>
                    <button className="px-10 rounded  active:scale-99 hover:cursor-pointer py-1 bg-blue-800 text-white font-bold">Download Report</button>
                </div>
            </div>
            <div className="grid lg:grid-cols-[1fr_500px] mt-5 gap-5">
                <div >
                    <div className="border border-[var(--border)] p-5 rounded-lg shadow-lg ">
                        <h1 className="font-bold text-2xl mb-5">Academic Information</h1>
                        <hr />
                        <div className="grid sm:grid-cols-2 mt-5 gap-5">
                            <div>
                                <h3 className="font-bold ">Email Address</h3>
                                <p>alex.rivera@futogen.edu</p>
                            </div>
                            <div>
                                <h3 className="font-bold ">Phone Number</h3>
                                <p>+91 98765 43210</p>
                            </div>
                            <div>
                                <h3 className="font-bold ">Date of Birth</h3>
                                <p>May 14, 2003</p>
                            </div>
                            <div>
                                <h3 className="font-bold ">Enrollment Date</h3>
                                <p>January 10, 2024</p>
                            </div>
                            <div>
                                <h3 className="font-bold ">Current Semester</h3>
                                <p>Semester II (Active)</p>
                            </div>
                            <div>
                                <h3 className="font-bold ">Academic Advisor</h3>
                                <p>Dr. Sarah Thompson</p>
                            </div>

                        </div>

                    </div>
                    <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-lg mt-5">
                        {/* Header */}
                        <div className="flex items-center gap-3">
                            <div className="rounded-md bg-blue-50 p-2"><Lock className="h-5 w-5 text-blue-900" /></div>
                            <h2 className="text-2xl font-semibold text-slate-800">Security & Preferences</h2>
                        </div>
                        <hr className="my-6 border-gray-200" />
                        <div className="grid gap-10 lg:grid-cols-2">
                            <div>
                                <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-blue-900">
                                    Update Password
                                </h3>

                                <div className="space-y-4">
                                    <input type="password" placeholder="Current Password" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600" />
                                    <input type="password" placeholder="New Password" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600" />
                                    <input type="password" placeholder="Confirm New Password" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600" />
                                    <button className="w-full rounded hover:cursor-pointer bg-slate-900 py-3  font-bold text-white transition hover:bg-slate-800 ">Save Password</button>
                                </div>
                            </div>
                            <div>
                                <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-blue-900">
                                    Notifications
                                </h3>
                                <div className="space-y-8">
                                    {notificationData.map((val, inx) => {
                                        return (
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="font-semibold text-slate-800">{val.title}</h4>
                                                    <p className="text-sm text-gray-500">{val.description}</p>
                                                </div>
                                                <button onClick={() => { toggleSwitch(val.toggle) }} className={`relative h-5 w-10 hover:cursor-pointer rounded-full transition duration-300 ${val.checked ? "bg-teal-600" : "bg-gray-400"}`}>
                                                    <span className={`absolute top-1 h-3 w-3 rounded-full bg-white shadow transition-all duration-300 ${val.checked ? "right-1" : "left-1"}`} />
                                                </button>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="rounded border border-[var(--border)] bg-blue-900 p-5">
                        <h1 className="text-white font-bold text-xl">Student Statistics</h1>
                        <div className="bg-[#2D397F]/50 w-full flex items-center  justify-between border border-[var(--border)] rounded p-4 mt-5">
                            <div>
                                <p className="text-white font-bold">Total Certificates</p>
                                <h1 className="text-white font-bold text-2xl">14</h1>
                            </div>
                            <div className="text-3xl rounded-xl text-white"><i className="ri-certificate-2-fill"></i></div>
                        </div>
                        <div className="bg-[#2D397F]/50 w-full flex items-center  justify-between border border-[var(--border)] rounded p-4 mt-5">
                            <div>
                                <p className="text-white font-bold">Global Rank</p>
                                <h1 className="text-white font-bold text-2xl">#42</h1>
                            </div>
                            <div className="text-3xl rounded-xl text-white"><i className="ri-medal-2-fill"></i></div>
                        </div>
                        <div className="bg-[#2D397F]/50 w-full flex items-center  justify-between border border-[var(--border)] rounded p-4 mt-5">
                            <div>
                                <p className="text-white font-bold">Average Rating</p>
                                <h1 className="text-white font-bold text-2xl">4.9 / 5</h1>
                            </div>
                            <div className="text-3xl rounded-xl text-white"><i className="ri-funds-box-fill"></i></div>
                        </div>
                        <hr className="mt-5" />
                        <div className="p-5 ">
                            <div className="flex justify-between">
                                <p className="font-bold text-white">Program Completion</p>
                                <p className="font-bold text-white">68%</p>
                            </div>
                            <div className="w-full h-3 relative rounded-full bg-blue-700/50">
                                <div className="w-[68%] h-3 relative rounded-full bg-blue-300">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-[var(--border)] mt-5  rounded-lg shadow-lg p-5">
                        <h1 className="font-bold text-xl">Active Roadmap</h1>
                        <div className=" mt-2">
                            <h2 className="text-lg">Web Fundamentals</h2>
                            <p className="text-gray-500 ">Completed on Feb 12</p>
                        </div>
                        <div className=" mt-2">
                            <h2 className="text-lg">React & State Mgmt</h2>
                            <p className="text-gray-500 ">In Progress - 4 modules left</p>
                        </div>

                        <div className=" mt-2">
                            <h1 className="text-lg">Advanced Backend</h1>
                            <p className="text-gray-500 ">Locked until Level 5</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}