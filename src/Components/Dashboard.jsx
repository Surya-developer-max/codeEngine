import { useEffect } from 'react';
import wifi from '../assets/Images/Dashboard/wifi.png'
import { useRef } from 'react';
import { useState } from 'react';
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend,
} from "recharts";
import CodeEditor from './codeEngine/CodeEditor';
export default function Dashboard() {
    const editorRef = useRef();
    const [output, setOutput] = useState("");

    function handleEditorDidMount(editor) {
        editorRef.current = editor;
    }

    function runCode() {
        const code = editorRef.current.getValue();

        try {
            const result = new Function(code)();
            setOutput(String(result));
        } catch (err) {
            setOutput(err.message);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const boxUi = 'rounded shadow hover:scale-[1.01] transition hover:shadow-lg bg-white border border-gray-300/50  border-[1px]'
    const students = [
        {
            name: "Surya",
            batch: "CS",
            solved: 42,
            accuracy: 94,
            status: "ACTIVE",
        },
        {
            name: "Arun",
            batch: "IT",
            solved: 38,
            accuracy: 91,
            status: "ACTIVE",
        },
        {
            name: "Karthik",
            batch: "ECE",
            solved: 27,
            accuracy: 86,
            status: "INACTIVE",
        },
        {
            name: "Priya",
            batch: "CS",
            solved: 51,
            accuracy: 97,
            status: "ACTIVE",
        },
        {
            name: "Divya",
            batch: "AIDS",
            solved: 33,
            accuracy: 89,
            status: "ACTIVE",
        }, {
            name: "Manoj",
            batch: "IT",
            solved: 35,
            accuracy: 89,
            status: "ACTIVE",
        },
        {
            name: "Swetha",
            batch: "AIDS",
            solved: 44,
            accuracy: 93,
            status: "ACTIVE",
        },
    ];
    return (
        <div>
            {/* section - 1 */}
            <div className="grid lg:grid-cols-4 sm:grid-cols-2  gap-10">
                <div className={`${boxUi} p-5 flex sm:justify-center gap-5 items-center`}>
                    <div >
                        <p><i className="ri-team-fill text-3xl bg-blue-100 text-blue-600 p-4 rounded-xl"></i></p>
                    </div>
                    <div>
                        <h3 className='font-bold' >Total Students</h3>
                        <h1 className='font-semibold'>150</h1>
                    </div>
                </div>
                <div className={`${boxUi} p-5 flex sm:justify-center items-center gap-5`}>
                    <div>
                        <p><i className="ri-terminal-box-line text-3xl bg-blue-100 text-blue-600 p-4 rounded-xl"></i></p>
                    </div>
                    <div>
                        <h3 className='font-bold' >Active Questions </h3>
                        <h1 className='font-semibold'>450</h1>
                    </div>
                </div>
                <div className={`${boxUi} p-5 flex sm:justify-center items-center gap-5`}>
                    <div>
                        <p><i className="ri-check-fill text-3xl bg-green-100 text-green-600 p-4 rounded-xl"></i></p>
                    </div>
                    <div>
                        <h3 className='font-bold' >Pass Rate</h3>
                        <h1 className='font-semibold'>78%</h1>
                    </div>
                </div>
                <div className={`${boxUi} p-5 flex sm:justify-center items-center text-white gap-5`} style={{ backgroundColor: "#21549a" }}>
                    <div>
                        <img src={wifi} alt="" />
                    </div>
                    <div>
                        <h3 className='font-bold' >Tests Ongoing</h3>
                        <h1 className='font-semibold'>2</h1>
                    </div>
                </div>
            </div>
            {/* Section - 2 */}
            <div className='grid grid-rows-[250px_250px_100px_100px_100px_100px] md:grid-rows-[250px_250px_100px_100px] md:grid-cols-2 lg:grid-cols-[1fr_200px_200px] lg:grid-rows-[250px_1fr_1fr]  mt-5 gap-5'>
                <div className={`${boxUi} md:col-span-2 lg:col-span-1 lg:row-span-3  overflow-auto scrollbar-none `}>
                    <div className='flex justify-between items-center border-b p-4 border-gray-300 '>
                        <h1 className='font-bold'>Recent Top Performers</h1>
                        <p>View All</p>
                    </div>
                    <div className=''>
                        <table width='100%' >
                            <thead className=' bg-blue-100 text-sm  '>
                                <tr>
                                    <th className="py-2 ps-2 text-start">STUDENT NAME</th>
                                    <th className="py-2 text-start">BATCH</th>
                                    <th className="py-2 text-start">SOLVED</th>
                                    <th className="py-2 text-start">ACCURACY</th>
                                    <th className="py-2 text-start">STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((val, inx) => <tr key={inx} className='hover:bg-gray-100 transition  border-b border-gray-400 '>
                                    <td className=' py-[18px] ps-2'>{val.name}</td>
                                    <td className=' py-[18px] '>{val.batch}</td>
                                    <td className=' py-[18px] '>{val.solved}</td>
                                    <td className=' py-[18px] '>{val.accuracy}</td>
                                    <td className=' py-[18px] '>{val.status}</td>
                                </tr>)}

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={`${boxUi} md:col-span-2 p-4`}>
                    <h1 className='font-bold'>Best Performers</h1>
                    <div className="w-full h-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={students}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="solved" fill="#3b82f6" radius={[5, 50, 0, 0]} />
                                <Bar dataKey="accuracy" fill="#3bf641" radius={[5, 50, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className={`${boxUi} flex justify-center flex-col items-center`}>
                    <p>
                        <i className="ri-add-large-line"></i>
                    </p>
                    <h4>Add challenge</h4>
                </div>
                <div className={`${boxUi} flex justify-center flex-col items-center`}>
                    <p>
                        <i className="ri-survey-line"></i>
                    </p>
                    <h4>Create MCQ</h4>
                </div>
                <div className={`${boxUi} flex justify-center flex-col items-center`}>
                    <p>
                        <i className="ri-git-repository-line"></i>
                    </p>
                    <h4>Gen Report</h4>
                </div>
                <div className={`${boxUi} flex justify-center flex-col items-center text-white`} style={{ backgroundColor: '#21549a' }}>
                    <p>
                        <i className="ri-bar-chart-2-fill"></i>
                    </p>
                    <h4>Monitor Live</h4>
                </div>
            </div>
            {/* Section -3 */}
            <div className='grid md:grid-cols-2 gap-5 mt-5'  >
                <div className={`${boxUi} h-[200px] relative text-white bg-gradient-to-t from-[#242966] to-[#000000]`} style={{ backgroundColor: 'linear-gradient(180deg, #242966 0%, #000000 100%)' }}>
                    <div className='absolute bottom-10 left-10'>
                        <h1>Global System Health</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                    </div>
                </div>
                <div className={`${boxUi} h-[200px] relative `} style={{ backgroundColor: 'gray' }}>
                    <div className='absolute bg-white px-2 py-1 top-5 left-5'><p>Regional Traffic Active</p></div>
                </div>

            </div>
        </div>
    )
}