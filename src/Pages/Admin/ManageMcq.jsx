export default function ManageMcq() {
    return (
        <div>
            <div className="flex justify-between w-full items-ceneter flex-wrap gap-5">
                <div>
                    <h1 className="font-bold text-2xl">Question Bank</h1>
                    <p>Manage and organize multiple-choice questions for your technical assessments.</p>
                </div>
                <button className="px-10 bg-blue-800 rounded font-bold md:text-xl text-white hover:cursor-pointer active:scale-99">Add Question</button>
            </div>
            <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] sm:grid-cols-2 grid-cols-1 gap-5 mt-5  border  p-5 border-[var(--border)] rounded-lg bg-white shadow-lg" >
                <div className="">
                    <input type="text" className="border w-full border-[var(--border)] p-2" placeholder="Filter Question by Text or ID..." />
                </div>
                <div className="">
                    <select name="" id="" className="border w-full border-[var(--border)] p-2">
                        <option value="All Categories">All Categories</option>
                        <option value="All Categories">Java</option>
                        <option value="All Categories">Css</option>
                        <option value="All Categories">HTMl</option>
                    </select>
                </div>
                <div className="">
                    <select name="" id="" className="border w-full border-[var(--border)] p-2">
                        <option value="All Categories">Eesy</option>
                        <option value="All Categories">Medium</option>
                        <option value="All Categories">Hard</option>
                    </select>
                </div>
                <div className="">
                    <button className="w-full bg-blue-800 text-white h-full rounded hover:cursor-pointer active:scale-99 font-bold">Clear filter</button>
                </div>
            </div>
            <div className="mt-5 border h-[450px]  overflow-auto scrollbar-none border-[var(--border)] rounded-lg bg-white shadow-lg">
                <table width={"100%"}   >
                    <thead className="bg-blue-100 h-15 sticky top-0  text-start ">
                        <tr>
                            <th className="p-2 text-start">Question Detail</th>
                            <th className="p-2 text-start">Category</th>
                            <th className="p-2 text-start">Difficulty</th>
                            <th className="p-2 text-start">Marks</th>
                            <th className="p-2 text-start">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {Array.from({ length: 30 }).map((_, i) => (
                            <tr key={i} className="h-20 border-b">
                                <td className="ps-2">Question {i + 1}</td>
                                <td className="ps-2">Java</td>
                                <td className="ps-2">Easy</td>
                                <td className="ps-2">5</td>
                                <td className="ps-2">
                                    <div className="flex gap-5">
                                        <p><i class="ri-pencil-line"></i></p>
                                        <p><i class="ri-delete-bin-line"></i></p>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
