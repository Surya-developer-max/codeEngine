export default function Index() {
    const boxUi = 'rounded shadow hover:scale-[1.01] transition hover:shadow-lg bg-white border border-[var(--border)]  border-[1px]'
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
    ];
    return (
        <div>

            <div className="flex justify-between">
                <div>
                    <h1 className="font-bold text-3xl" style={{ color: 'var(--text)' }}>Welcome back, Vijay</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate </p>
                </div>
                <div>
                    <button className="px-10 py-2 bg-blue-800 text-white rounded-lg text-xl font-semibold">Start Today's Lesson</button>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                <div className={`${boxUi} p-5`}>
                    <div className="flex justify-between items-center">
                        <div className="text-3xl px-3 py-1 bg-blue-100 rounded-xl text-blue-500"><i class="ri-shapes-line"></i></div>
                        <div className="h-5 w-30 rounded-full bg-gray-200">Text</div>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-semibold text-sm">Total Solved</h1>
                        <h1 className="text-5xl font-bold ">45</h1>
                    </div>
                </div>
                <div className={`${boxUi} p-5`}>
                    <div className="flex justify-between items-center">
                        <div className="h-10 w-10 bg-gray-200 text-center">ICON</div>
                        <div className="h-5 w-30 rounded-full bg-gray-200">Text</div>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-semibold text-sm">Pending Tasks</h1>
                        <h1 className="text-5xl font-bold ">3</h1>
                    </div>
                </div>
                <div className={`${boxUi} p-5`}>
                    <div className="flex justify-between items-center">
                        <div className="h-10 w-10 bg-gray-200 text-center"></div>
                        <div className="h-5 w-30 rounded-full bg-gray-200">Text</div>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-semibold text-sm">Avg MCQ Score</h1>
                        <h1 className="text-5xl font-bold ">88%</h1>
                    </div>
                </div>
                <div className={`${boxUi} p-5`}>
                    <div className="flex justify-between items-center">
                        <div className="h-10 w-10 bg-gray-200 text-center">ICON</div>
                        <div className="h-5 w-30 rounded-full bg-gray-200">Text</div>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-semibold text-sm">Code Streak</h1>
                        <h1 className="text-5xl font-bold ">12</h1>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-[1fr_2fr] mt-5  gap-5">
                <div className={`${boxUi} p-4`}>
                    <div>
                        <h1 className="font-bold text-xl" style={{ color: 'var(--text)' }}>Language Proficiency</h1>
                    </div>
                    <div className="mt-2">
                        {/* c */}
                        <div className="mt-5">
                            <div className="flex justify-between">
                                <p className="font-bold">C</p>
                                <p className="font-bold">90%</p>
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-full relative overflow-hidden">
                                <div className="absolute h-full w-[90%] bg-blue-700 rounded-full"></div>
                            </div>
                        </div>
                        {/* c++ */}
                        <div className="mt-5">
                            <div className="flex justify-between">
                                <p className="font-bold">C++</p>
                                <p className="font-bold">75%</p>
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-full relative overflow-hidden">
                                <div className="absolute h-full w-[75%] bg-blue-700 rounded-full"></div>
                            </div>
                        </div>
                        {/* Java */}
                        <div className="mt-5">
                            <div className="flex justify-between">
                                <p className="font-bold">Java</p>
                                <p className="font-bold">50%</p>
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-full relative overflow-hidden">
                                <div className="absolute h-full w-[50%] bg-blue-700 rounded-full"></div>
                            </div>
                        </div>
                        {/* Java */}
                        <div className="mt-5">
                            <div className="flex justify-between">
                                <p className="font-bold">React</p>
                                <p className="font-bold">99%</p>
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-full relative overflow-hidden">
                                <div className="absolute h-full w-[99%] bg-blue-700 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${boxUi}`}>
                    <div className='flex justify-between items-center border-b p-4 border-gray-300 '>
                        <h1 className='font-bold' style={{ color: 'var(--text)' }}>Recent Submissions</h1>
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
            </div>

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