import { useState } from "react"
import Service from "../Service/Service";

export default function StaffPage() {

    const [data, setData] = useState({
        title: '',
        stmt: '',
        diff: '',
        topic: '',
        smIn: '',
        smOt: '',
        cons: '',
        ts1: '',
        ts2: '',
        ts3: '',
        ts4: '',
    })
    function handleInpust(key, val) {
        setData((prv) => ({
            ...prv,
            [key]: val
        }))
    }
    function handleSubmit(e) {
        e.preventDefault();
        Service.addQuestion(data).then((res) => {
            console.log(res)
            setData({
                title: '',
                stmt: '',
                diff: '',
                topic: '',
                smIn: '',
                smOt: '',
                cons: '',
                ts1: '',
                ts2: '',
                ts3: '',
                ts4: '',
            })

        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>

                <div className="grid grid-cols-3 gap-5">
                    <div>
                        <label htmlFor="" className="font-bold text-md">Problem Title</label>
                        <input type="text" placeholder="" className="border w-full p-3 rounded-xl border-gray-400" value={data.title} onChange={(e) => { handleInpust('title', e.target.value) }} />
                    </div>
                    <div>
                        <label htmlFor="" className="font-bold text-md">Problem Statement</label>
                        <input type="text" className="border w-full p-3 rounded-xl border-gray-400" value={data.stmt} onChange={(e) => { handleInpust('stmt', e.target.value) }} />
                    </div>
                    <div>
                        <label htmlFor="" className="font-bold text-md">Difficulty</label>
                        <br />
                        <select name="" className="border w-full p-3 rounded-xl border-gray-400" id="" value={data.diff} onChange={(e) => { handleInpust('diff', e.target.value) }}>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="" className="font-bold text-md">Topic</label>
                        <br />
                        <input type="text" className="border w-full p-3 rounded-xl border-gray-400" value={data.topic} onChange={(e) => { handleInpust('topic', e.target.value) }} />
                    </div>
                    <div>
                        <label htmlFor="" className="font-bold text-md">Sample Input</label>
                        <br />
                        <input type="text" className="border w-full p-3 rounded-xl border-gray-400" value={data.smIn} onChange={(e) => { handleInpust('smIn', e.target.value) }} />
                    </div>
                    <div>
                        <label htmlFor="" className="font-bold text-md">Sample Output</label>
                        <br />
                        <input type="text" className="border w-full p-3 rounded-xl border-gray-400" value={data.smOt} onChange={(e) => { handleInpust('smOt', e.target.value) }} />
                    </div>
                    <div>
                        <label htmlFor="" className="font-bold text-md">Constraints</label>
                        <br />
                        <input type="text" className="border w-full p-3 rounded-xl border-gray-400" value={data.cons} onChange={(e) => { handleInpust('cons', e.target.value) }} />
                    </div>
                </div>
                <div className="grid-cols-2 grid gap-5 mt-5 ">
                    <div>
                        <label htmlFor="" className="font-bold text-md">Test Case 1</label>
                        <br />
                        <input type="text" className="border w-full p-3 rounded-xl border-gray-400" value={data.ts1} onChange={(e) => { handleInpust('ts1', e.target.value) }} />
                    </div>
                    <div>
                        <label htmlFor="" className="font-bold text-md">Test Case 2</label>
                        <br />
                        <input type="text" className="border w-full p-3 rounded-xl border-gray-400" value={data.ts2} onChange={(e) => { handleInpust('ts2', e.target.value) }} />
                    </div><div>
                        <label htmlFor="" className="font-bold text-md">Test Case 3</label>
                        <br />
                        <input type="text" className="border w-full p-3 rounded-xl border-gray-400" value={data.ts3} onChange={(e) => { handleInpust('ts3', e.target.value) }} />
                    </div><div>
                        <label htmlFor="" className="font-bold text-md">Test Case 4</label>
                        <br />
                        <input type="text" className="border w-full p-3 rounded-xl border-gray-400" value={data.ts4} onChange={(e) => { handleInpust('ts4', e.target.value) }} />
                    </div>
                </div>
                <button type="submit" className="px-3 font-bold text-white py-1 hover:cursor-pointer  bg-green-500 rounded  mt-3">submit</button>
            </form>
        </div>
    )
}