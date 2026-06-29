import ComputerIll from '../assets/Images/CodingArena/computer.png'
import TeaCup from '../assets/Images/CodingArena/TeaCup.png'
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
export default function CodingArena() {
    const data = [
        {
            name: 'tamil',
            product: 200,
            product2: 300,

        }, {
            name: 'ss',
            product: 100,
            product2: 300,

        }, {
            name: 'dd',
            product: 300,
            product2: 500,

        }, {
            name: 'fff',
            product: 700,
            product2: 900,

        }, {
            name: 'gg',
            product: 200,
            product2: 400,

        }, {
            name: 'hh',
            product: 20,
            product2: 200,

        },
    ]
    const data2 =
        [
            {
                status: "Solved",
                problemTitle: "Two Sum",
                difficulty: "Easy",
                category: "Arrays",
                successRate: "87%",
                points: 100
            },
            {
                status: "Attempted",
                problemTitle: "Valid Parentheses",
                difficulty: "Easy",
                category: "Stack",
                successRate: "82%",
                points: 120
            },
            {
                status: "Not Started",
                problemTitle: "Merge Intervals",
                difficulty: "Medium",
                category: "Intervals",
                successRate: "64%",
                points: 250
            },
            {
                status: "Solved",
                problemTitle: "Binary Tree Level Order Traversal",
                difficulty: "Medium",
                category: "Trees",
                successRate: "71%",
                points: 300
            },
            {
                status: "Attempted",
                problemTitle: "Longest Substring Without Repeating Characters",
                difficulty: "Medium",
                category: "Sliding Window",
                successRate: "58%",
                points: 350
            },
            {
                status: "Solved",
                problemTitle: "Reverse Linked List",
                difficulty: "Easy",
                category: "Linked List",
                successRate: "84%",
                points: 150
            },
            {
                status: "Not Started",
                problemTitle: "Word Ladder",
                difficulty: "Hard",
                category: "Graph",
                successRate: "39%",
                points: 600
            },
            {
                status: "Solved",
                problemTitle: "Coin Change",
                difficulty: "Medium",
                category: "Dynamic Programming",
                successRate: "55%",
                points: 400
            },
            {
                status: "Attempted",
                problemTitle: "Kth Largest Element in an Array",
                difficulty: "Medium",
                category: "Heap",
                successRate: "68%",
                points: 320
            },
            {
                status: "Not Started",
                problemTitle: "Regular Expression Matching",
                difficulty: "Hard",
                category: "Dynamic Programming",
                successRate: "31%",
                points: 750
            }
        ]

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
            <div className='grid md:grid-cols-[400px_1fr] md:grid-rows-[200px_300px] gap-3 mt-5'>
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
                    <div className='mt-5'>

                        <table width='900px' cellPadding='10' >

                            <thead className=' bg-blue-100 h-10 font-semibold'>
                                <tr>
                                    <th className="px-3 text-left ">STATUS</th>
                                    <th className="px-3 text-left ">PROBLEM TITLE</th>
                                    <th className="px-3 text-left ">DIFFICULTY</th>
                                    <th className="px-3 text-left ">CATEGORY</th>
                                    <th className="px-3 text-left ">SUCCESS RATE</th>
                                    <th className="px-3 text-left ">POINTS</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data2.map((val, inx) => <tr key={inx} className='font-bold'>
                                    <td className='p-3'>{val.status == "Attempted" ? <i className="ri-radio-button-line text-yellow-400"></i> : val.status == "Not Started" ? <i className="ri-radio-button-line text-red-400"></i> : val.status == "Solved" ? <i className="ri-radio-button-fill text-green-400"></i> : ""}</td>
                                    <td className='p-3 truncate'>{val.problemTitle}</td>
                                    <td className="p-3 uppercase text-xs">
                                        <p
                                            className={`w-max px-2 py-[1px] rounded-full ${val.difficulty === "Easy"
                                                    ? "bg-green-200 text-green-600"
                                                    : val.difficulty === "Medium"
                                                        ? "bg-yellow-200 text-yellow-600"
                                                        : "bg-red-200 text-red-600"
                                                }`}
                                        >
                                            {val.difficulty}
                                        </p>
                                    </td>
                                    <td className='p-3'>{val.category}</td>
                                    <td className='p-3 '><div className='w-full bg-gray-200 h-1 rounded-full relative'>
                                        <div className={`absolute h-full bg-green-400 rounded-full left-0`} style={{ width: val.successRate }}>
                                        </div>
                                    </div></td>
                                    <td className='p-3'>{val.points}Pts</td>
                                </tr>)}

                            </tbody>

                        </table>
                    </div>
                </div>
                <div className={`${boxUi} p-4 `}>
                    <h2 className='font-bold'>Activity Overview</h2>
                    <ResponsiveContainer height="70%" width="100%" className='mt-5'>
                        <AreaChart data={data}>
                            {/* <XAxis dataKey="name" />
                            <YAxis /> */}
                            <Tooltip />
                            {/* <Legend /> */}
                            <CartesianGrid strokeDasharray='5 1' />
                            <Area type='monotone' stackId='1' dataKey="product2" stroke='blue' />
                            <Area type='monotone' stackId='1' dataKey="product" stroke='blue' fill='green' />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    )
}