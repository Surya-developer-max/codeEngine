export default function Profile() {
    return (
        <div>
            <div className="flex justify-between  items-center bg-white border border-[var(--border)] p-5 gap-5 rounded shadow-lg flex-wrap">
                <div className="flex gap-5 items-center ">
                    <div className="h-20 w-20 bg-gray-300 rounded-full ">
                    </div>
                    <div>
                        <h1 className="font-bold text-xl">Alex Rivera</h1>
                        <div className="flex  gap-5 flex-wrap">
                            <p className="px-3 bg-green-100 text-green-800 font-bold rounded-full "> FG-2024-089</p>
                            <p className="px-3 bg-yellow-100 text-yellow-800 font-bold rounded-full "> BCA-2024-A</p>
                            <p> Mumbai, IN</p>

                        </div>
                    </div>
                </div>
                <div className=" flex gap-5 flex-wrap">
                    <button className="px-10 rounded  active:scale-99 hover:cursor-pointer py-1 border border-[var(--border)] font-bold">Edit Profile</button>
                    <button className="px-10 rounded  active:scale-99 hover:cursor-pointer py-1 bg-blue-800 text-white font-bold">Download Report</button>
                </div>

            </div>
        </div>
    )
}