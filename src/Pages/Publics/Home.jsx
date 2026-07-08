import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <div className="h-screen flex justify-center items-center ">
            <NavLink to="/admin/login" >
                <button className=' hover:cursor-pointer hover:-translate-y-[2px] hover:scale-101 active:scale-99 transition  px-5 py-2 bg-blue-300 font-bold  rounded m-1'>Admin Login</button>
            </NavLink>
            <NavLink to='/student/login'>
                <button className=' hover:cursor-pointer hover:-translate-y-[2px] hover:scale-101 active:scale-99 transition  px-5 py-2 bg-green-300 font-bold  rounded m-1'>Student Login</button>
            </NavLink>
        </div>
    )
}