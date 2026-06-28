import ComputerIll from '../assets/Images/CodingArena/computer.png'
import TeaCup from '../assets/Images/CodingArena/TeaCup.png'
export default function CodingArena() {
    const boxUi = 'rounded shadow hover:scale-[1.01] transition hover:shadow-lg bg-white'
    return (
        <div>
            {/* SECTION-1 */}
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                <div className={`md:col-span-2 p-3 grid md:grid-cols-2 grid-cols-1 justify-items-center ${boxUi}`}>
                    <div className=''>
                        <h1 className=" text-3xl font-bold mb-1">Coding Arena</h1>
                        <p>Master your technical skills through deliberate practice. Solve problems ranging from fundamental algorithms to complex systems design.</p>
                    </div>
                    <div className=''>
                        <img src={ComputerIll} className=' w-[150px]  object-cover' alt="" />
                    </div>
                </div>
                <div className={`${boxUi} flex gap-2 overflow-hidden bg-green-100/20 p-2`}>
                    <div className='h-full w-[30%] flex justify-center items-center'>
                        <div className='h-20 w-20 bg-green-500 rounded-xl'></div>
                    </div>
                    <div className='h-full w-full mt-5'>
                        <p className=' mb-1 font-bold text-xs text-green-600'>CURRENT STREAK</p>
                        <h2 className=' mb-1 text-4xl font-semibold'>12 Days</h2>
                        <p className=' mb-1 '>Keep it up! You're on fire</p>
                    </div>
                </div>
            </div>
            {/* SECTION-2 */}
            <div className='grid lg:grid-cols-[2fr_1fr_2fr] grid-cols-1 gap-2 mt-5'>
                <div className={`${boxUi} py-5 px-4 gap-3 flex flex-wrap md:flex-nowrap justify-around items-center`}>
                    <div className=''>
                        <div className='w-[100px] h-[100px] bg-gray-200 rounded-full'>
                        </div>
                    </div>
                    <div className='w-[70%]'>
                        <h2 className='font-bold'>Progress Overview</h2>
                        <p>142 of 190 Problems Solved</p>
                        <div className='flex mt-4'>
                            <p className='font-bold text-xs me-2 px-2 rounded-full bg-green-100 text-green-600'>EASY:</p>
                            <p className='font-bold text-xs me-2 px-2 rounded-full bg-yellow-100 text-yellow-600'>MED:</p>
                            <p className='font-bold text-xs me-2 px-2 rounded-full bg-red-100 text-red-600'>HARD:</p>
                        </div>
                    </div>
                </div>
                <div className={`${boxUi} p-4`}>
                    <div>
                        <p className='text-3xl'><i className="ri-medal-fill"></i></p>
                        <h1 className='mt-3 text-5xl font-bold'>2,450</h1>
                        <p>Total Points Earned</p>
                    </div>
                </div>
                <div className={`${boxUi} p-4 group overflow-hidden text-white relative`} style={{ backgroundColor: '#07149c' }}>
                    <div className='absolute -bottom-7 right-0'>
                        <img src={TeaCup} className='h-[200px] group-hover:scale-115 transition duration-500' alt="" />
                    </div>
                    <div className='w-[70%]'>
                        <p className='text-3xl px-3 py-1 bg-purple-700 w-max h-max rounded-lg '><i className="ri-target-fill"></i></p>
                        <h2 className='text-3xl mt-3'>Daily Challenges</h2>
                        <p className='my-3 w-[90%]'>Binary Tree Zigzag Level Order Travel</p>
                        <div className='w-full flex justify-center mt-5'>
                            <button className='w-full bg-white text-black py-2 rounded hover:cursor-pointer hover:scale-101 transition font-bold '>Solve Now</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION -3 */}
            <div className='grid md:grid-cols-[400px_1fr] md:grid-rows-2 gap-3 mt-5'>
                <div className={`${boxUi} p-4`}>
                    <h2 className='font-bold'>Quick Filters</h2>
                    <div className='mt-2'>
                        <input type="text" className='w-full border rounded-lg border-gray-400 py-2 px-2 ' />
                        <div className='grid grid-cols-3 mt-2 gap-2'>
                            <select name="" id="" className='border rounded w-full py-1 border-gray-400'>
                                <option value="">Difficulty</option>
                            </select>
                            <select name="" id="" className='border rounded w-full py-1 border-gray-400'>
                                <option value="">Category</option>
                            </select>
                            <select name="" id="" className='border rounded w-full py-1 border-gray-400'>
                                <option value="">Status</option>
                            </select>
                        </div>
                        <p className='mt-2  hover:cursor-pointer w-max'><i className="ri-refresh-line me-1"></i>Reset Filters</p>
                    </div>
                </div>
                <div className={`${boxUi} row-span-2 overflow-auto scrollbar-none p-4 `}>
                    <h2 className='font-bold '>Recent Problems</h2>
                    <div className=''>
                        <table width='800px' className=''>
                            <thead className=' bg-blue-100 h-10 font-semibold'>
                                <tr>
                                    <td>STATUS</td>
                                    <td>PROBLEM TITLE</td>
                                    <td> DIFFICULTY</td>
                                    <td> CATEGORY</td>
                                    <td>SUCCESS RATE</td>
                                    <td>POINTS</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                </tr>
                                <tr>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                </tr><tr>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                </tr><tr>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                </tr><tr>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                </tr><tr>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                    <td>hii</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={`${boxUi} `}></div>
            </div>

        </div>
    )
}