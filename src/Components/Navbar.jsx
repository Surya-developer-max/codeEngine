import { useEffect, useState } from 'react';
import CodingArena from './CodingArena'
import Dashboard from './Dashboard';
import Index from '../Components/Index';
import { Link, Route, Routes, NavLink } from 'react-router-dom'
import Workshop from './Workshop';
export default function Navbar() {

    const navItems = [
        {
            to: '/Dashboard',
            icon: 'ri-layout-fill ',
            name: 'Dashboard'
        },
        {
            to: '/CodingArena',
            icon: 'ri-code-line ',
            name: 'Coding Arena'
        },
        ,
        {
            to: '/Submissions',
            icon: 'ri-check-line  ',
            name: 'Submissions'
        },
        ,
        {
            to: '/MCQ Test',
            icon: 'ri-questionnaire-line ',
            name: 'MCQ Test'
        }, {
            to: '/Workshop',
            icon: 'ri-questionnaire-line ',
            name: 'Workshop'
        },
    ]
    const CompanyName = "FutoGen"
    const [currentPage, setCurrentPage] = useState(0)

    return (
        <div className="overflow-hidden bg-gray-200">
            <div className="h-screen p-2">
                <div className="grid h-full grid-cols-[70px_1fr] md:grid-cols-[200px_1fr] md:grid-rows-[70px_1fr]  grid-rows-[50px_1fr] gap-2 ">
                    {/* aside bar */}
                    <div className="rounded-xl bg-white shadow hover:shadow-xl hover:scale-[1.001] transition row-span-2 p-2">
                        <div className="flex flex-col justify-around items-center md:items-start h-full w-full">
                            {/* icon */}
                            <div className="">
                                <NavLink to='/'>
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="h-10 w-10 bg-gray-200 rounded-xl"></div>
                                        <div className="md:block hidden">
                                            <h1>{CompanyName}</h1>
                                            <h1>Assessment Portal</h1>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            {/* section1 */}
                            <div className=" w-max md:w-full flex  flex-col gap-y-3">
                                {navItems.map((val, inx) => {
                                    return (
                                        <NavLink to={val.to}
                                            className={({ isActive }) => `flex items-center md:justify-start justify-center gap-2 p-2 rounded-xl shadow ${isActive ? "bg-blue-700 text-white" : ""}`}>
                                            <p><i className={val.icon}></i></p>
                                            <p className="md:block hidden">{val.name}</p>
                                        </NavLink>
                                    )
                                })}
                            </div>
                            {/* section2 */}
                            <div className=" w-max md:w-full flex  flex-col gap-y-3">
                                <div className="flex w-10 md:w-full items-center justify-center md:justify-start gap-2 p-2 shadow rounded-xl hover:cursor-pointer hover:scale-[1.01] transition  hover:shadow-md">
                                    <p><i class="ri-settings-2-line"></i></p>
                                    <p className="md:block hidden">Settings</p>
                                </div>
                                <div className="flex w-10 md:w-full items-center justify-center md:justify-start gap-2 p-2 shadow rounded-xl hover:cursor-pointer hover:scale-[1.01] transition  hover:shadow-md">
                                    <p><i class="ri-question-line"></i></p>
                                    <p className="md:block hidden">Support</p>
                                </div>
                                <div className="flex w-10 md:w-full items-center justify-center md:justify-start gap-2 p-2 shadow rounded-xl hover:cursor-pointer hover:scale-[1.01] transition  hover:shadow-md ">
                                    <p>+</p>
                                    <p className="md:block hidden">Start New Test</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* nav bar */}
                    <div className="rounded-xl bg-white shadow hover:shadow-xl hover:scale-[1.001] transition px-5">
                        <div className="flex justify-between h-full w-full items-center">
                            <div className="flex items-center h-full md:gap-10 gap-2">
                                <h1 className="heading md:block hidden"> {CompanyName} Assessment Portal</h1>
                                <div className="w-10 h-10 bg-gray-200  rounded-xl md:hidden block"></div>
                                {/* <div className="gap-3 sm:flex block ">
                                    <p>Material</p>
                                    <p>Forms</p>
                                </div> */}
                            </div>
                            <div className="flex items-center md:gap-5 gap-2">
                                <div className="bg-blue-500/20 rounded-full px-2 flex items-center">
                                    <i className="ri-search-line text-blue-600"></i>
                                    <input type="text" className="px-3 py-2 lg:block hidden " placeholder="Quick search " />
                                </div>
                                <p className="text-lg"><i className="ri-notification-2-line"></i></p>
                                <p className="text-lg"><i className="ri-question-line"></i></p>
                                <div className="h-10 w-[1px] md:block hidden bg-gray-400 rounded-xl"></div>
                                <div className="flex items-center gap-5">
                                    <p className="md:block hidden">Logout</p>
                                    <div className="w-10 h-10  bg-gray-100 rounded-xl"></div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* content-body */}

                    <div className="rounded-xl  shadow hover:shadow-xl hover:scale-[1.001] transition overflow-y-auto scrollbar-none p-4 bg-white relative ">
                        <Routes>
                            <Route path="/CodingArena" element={<CodingArena />} />
                            <Route path='/Dashboard' element={<Dashboard />} />
                            <Route path='/' element={<Index />} />
                            <Route path='/Workshop' element={<Workshop />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>

    );
}