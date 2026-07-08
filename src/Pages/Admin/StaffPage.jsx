import { useState } from "react"
import Service from "../../Service/Service";

export default function StaffPage() {

    const [data, setData] = useState({
        ChallengeDescription: '',
        Constraints: '',
        ChallengeTitle: '',
        Difficulty: '',
        Points: '',
        Category: '',
        TimeLimit: '',
        Memory: '',
        TestCases: '',
        Explanation: '',
        Input: '',
        Output: ''
    })
    function handleInpust(key, val) {
        setData((prv) => ({
            ...prv,
            [key]: val
        }))
    }
    console.log(data)
    function handleSubmit(e) {
        e.preventDefault();
        Service.addQuestion(data).then((res) => {
            console.log(res)
            setData({
                ChallengeDescription: '',
                Constraints: '',
                ChallengeTitle: '',
                Difficulty: '',
                Points: '',
                Category: '',
                TimeLimit: '',
                Memory: '',
                TestCases: '',
                Explanation: '',
                Input: '',
                Output: ''
            })

        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className="grid lg:grid-cols-[1fr_400px] lg:grid-rows-[415px_1fr_400px] gap-5 ">
                    <div className=" bg-white rounded-xl overflow-hidden border border-[var(--border)] lg:row-span-2">
                        <div className="w-full bg-blue-100 p-4">
                            <h1 className="font-bold text-xl">Problem Statement</h1>
                        </div>
                        <div className="p-5">
                            <p>Challenge Description</p>
                            <textarea name="" rows={10} placeholder="Describe the problem, the context, and the expectations using Markdown..." className="border rounded w-full p-3  border-gray-400" value={data.stmt} onChange={(e) => { handleInpust('ChallengeDescription', e.target.value) }} id=""></textarea>
                            <p className="mt-5">Constraints</p>
                            <textarea type="text" rows={5} placeholder="e.g. 1 &lt;= nums.length &lt;= 10^4" className="border rounded w-full p-3  border-gray-400" value={data.cons} onChange={(e) => { handleInpust('Constraints', e.target.value) }} />
                        </div>
                    </div>
                    <div className=" bg-white p-5 border border-[var(--border)] rounded-xl">
                        <h1 className="font-bold text-xl">General Information</h1>
                        <div className="mt-5">
                            <p className="font-bold ">Challenge Title</p>
                            <input type="text" placeholder="e.g. Optimized Pathfinding" className="border w-full px-3 py-2 rounded-lg border-gray-400" value={data.title} onChange={(e) => { handleInpust('ChallengeTitle', e.target.value) }} />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5 mt-5">
                            <div>
                                <label htmlFor="" className="font-bold text-md">Difficulty</label>
                                <br />
                                <select name="" className="border w-full px-3 py-2 rounded-lg border-gray-400" id="" value={data.diff} onChange={(e) => { handleInpust('Difficulty', e.target.value) }}>
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="" className="font-bold text-md" >Points</label>
                                <br />
                                <input type="text" value="100" className="border w-full px-3 py-2 rounded-lg border-gray-400" value={data.topic} onChange={(e) => { handleInpust('Points', e.target.value) }} />
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="" className="font-bold text-md ">Category</label>
                                <br />
                                <input type="text" className="border w-full px-3 py-2 rounded-lg border-gray-400" value={data.topic} onChange={(e) => { handleInpust('Category', e.target.value) }} />
                            </div>
                            <div>
                                <label htmlFor="" className="font-bold text-md">Time Limit (ms)</label>
                                <br />
                                <input type="text" value="1000" className="border w-full px-3 py-2 rounded-lg border-gray-400" value={data.topic} onChange={(e) => { handleInpust('TimeLimit', e.target.value) }} />
                            </div> <div>
                                <label htmlFor="" className="font-bold text-md">Memory (MB)</label>
                                <br />
                                <input type="text" className="border w-full px-3 py-2 rounded-lg border-gray-400" value={data.topic} onChange={(e) => { handleInpust('Memory', e.target.value) }} />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#233144] overflow-hidden lg:row-span-2 rounded-xl">
                        <div className="w-full flex justify-between bg-[#152270] p-4 text-white items-center">
                            <p>TestCases (Active)</p>
                            <p className="text-xs font-semibold bg-blue-200 px-2 text-blue-700 rounded-lg py-1">STRICT MODE</p>
                        </div>
                        <div className="p-4 space-y-5">
                            <div className="bg-[#2E3B4E] rounded-lg p-2">
                                <div className="flex  justify-between">
                                    <p className="text-white text-sm">#01 - Primary Test</p>
                                    <div className="flex items-center gap-3">
                                        <p className="text-[10px] text-gray-400">HIDDEN</p>
                                        <input type="checkbox" className="" />
                                        <i className="ri-delete-bin-line text-gray-500 hover:cursor-pointer "></i>
                                    </div>
                                </div>
                                <textarea name=""  className=" text-white p-2 border border-gray-700 bg-[#252F3E] w-full mt-2 rounded-lg" rows={3} id="" ></textarea>
                                <textarea name=""  className=" text-white p-2 border border-gray-700 bg-[#252F3E] w-full mt-2 rounded-lg" rows={3} id=""></textarea>
                            </div>
                            <div className="bg-[#2E3B4E] rounded-lg p-2 ">
                                <div className="flex  justify-between">
                                    <p className="text-white text-sm">#02 - Large Input</p>
                                    <div className="flex items-center gap-3">
                                        <p className="text-[10px] text-gray-400">HIDDEN</p>
                                        <input type="checkbox" className="" />
                                        <i className="ri-delete-bin-line text-gray-500 hover:cursor-pointer "></i>
                                    </div>
                                </div>
                                <textarea name=""  className=" text-white p-2 border border-gray-700 bg-[#252F3E] w-full mt-2 rounded-lg" rows={3} id=""></textarea>
                                <textarea name=""  className=" text-white p-2 border border-gray-700 bg-[#252F3E] w-full mt-2 rounded-lg" rows={3} id=""></textarea>
                            </div>
                            <button className="w-full border border-dashed py-2 border-gray-400 rounded text-gray-400 hover:cursor-pointer">Add</button>
                        </div>
                    </div>
                    <div className=" bg-white  border border-[var(--border)] rounded-xl overflow-hidden">
                        <div className="flex justify-between items-center p-4 w-full bg-blue-100 p-4">
                            <p className="text-lg font-bold">Example Scenarios</p>
                            <p>Add Example</p>
                        </div>
                        <div className="p-5">
                            <div className=" bg-[#EFF4FF] p-3 rounded  border border-[var(--border)] grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="">Input</label>
                                    <input type="text" type="text" placeholder="" className="border bg-white w-full px-3 py-2 rounded-lg border-gray-400" onChange={(e) => { handleInpust('Input', e.target.value) }} />
                                </div>
                                <div>
                                    <label htmlFor="">Output</label>
                                    <input type="text" type="text" placeholder="" className="border bg-white  w-full px-3 py-2 rounded-lg border-gray-400" onChange={(e) => { handleInpust('Output', e.target.value) }} />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="">Explanation</label>
                                    <textarea value={data.Explanation} onChange={(e) => { handleInpust('Explanation', e.target.value) }} rows={5} type="text" type="text" placeholder="" className="bg-white border w-full px-3 py-2 rounded-lg border-gray-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}