import { useState } from "react"
export default function AssessmentCreator() {
    const [selectedLanguage, setSelectedLanguage] = useState([]);
    const [selectedNonTechnical, setSelectedNonTechnical] = useState([])
    const difficulty = ["Easy", "Medium", "Hard", "Mixed"]
    const [diffSelected, setDiffSelected] = useState("")
    const nonTechnical = ["Logical Reasoning", " Verbal Ability", " Quantitative Aptitude", "Business Communication", "Problem Solving"]
    const technical = ["C", "C++", "Java", "Python", "JavaScript", "Go"];
    const [selected, setSelected] = useState("technical")
    const [values, setValues] = useState({
        title: '',
        duration: '',
        mcq: '',
        mcqMark: '',
        codeingProblems: '',
        codeMark: '',
        assessmentType: 'technical',
        difficulty: '',
        topics: [],
    })
    const options = [
        {
            id: "technical",
            title: "Technical",
            subtitle: "Coding, Programming, Logic",
            icon: "",
        },
        {
            id: "non-technical",
            title: "Non-Technical",
            subtitle: "Aptitude, Verbal, Soft Skills",
            icon: "",
        },
    ];
    function handleAssType(val) {
        setSelected(val);

        if (val === "technical") {
            setSelectedNonTechnical([]);
        } else {
            setSelectedLanguage([]);
        }

        setValues(prev => ({
            ...prev,
            assessmentType: val,
            topics: [],
        }));
    }
    function handleSetValues(inx, val) {
        setValues(prev => ({
            ...prev,
            [inx]: val
        }))
    }
    function setDiffi(diff) {
        setDiffSelected(diff)
        setValues(prev => ({
            ...prev,
            ["difficulty"]: diff
        }))
    }

    function toggleLanguage(lang) {
        setSelectedLanguage((prev) =>
            prev.includes(lang)
                ? prev.filter((item) => item !== lang)
                : [...prev, lang]
        );
        setValues(prev => ({
            ...prev,
            ["topics"]: selectedLanguage,
        }))
    }

    function toggleNonTechnical(lang) {
        setSelectedNonTechnical(prev =>
            prev.includes(lang) ? prev.filter((items) => items != lang) : [...prev, lang]
        )
        setValues(prev => ({
            ...prev,
            ["topics"]: selectedNonTechnical,
        }))
    }
    function handleCreateAssment() {
        const data = {
            ...values,
            topics:
                values.assessmentType === "technical"
                    ? selectedLanguage
                    : selectedNonTechnical,
        };
    }
    return (
        <div className="">
            <div className="grid lg:grid-cols-[1fr_350px] grid-cols-1 gap-5  ">
                <div className="w-full h-full bg-white space-y-5">
                    <div className="border border-[var(--border)] p-5 rounded-lg shadow-lg">
                        <h1 className="font-bold text-xl">Basic Assessment Details</h1>
                        <div className="grid sm:grid-cols-2 gap-2 mt-5">
                            <div>
                                <label htmlFor="">Assessment Title</label>
                                <input type="text" onChange={(e) => { handleSetValues('title', e.target.value) }} className="border border-[var(--border)] w-full rounded p-2" />
                            </div>
                            <div>
                                <label htmlFor="">Duration (Minutes) </label>
                                <input onWheel={(e) => e.target.blur()} onChange={(e) => { handleSetValues('duration', Number(e.target.value)) }} type="number" className="border border-[var(--border)] w-full rounded p-2" />
                            </div>
                        </div>
                        <div className="mt-5">
                            <h2 className="">Assessment Type</h2>
                            <div className="grid sm:grid-cols-2 gap-2 mt-1">
                                {options.map((item) => (
                                    <button key={item.id} onClick={() => handleAssType(item.id)} className={` hover:cursor-pointer flex items-center gap-4 rounded-lg border border-[var(--border)] p-6 transition-all duration-300${selected === item.id ? "border-blue-700 bg-blue-50 ring-2 ring-blue-700" : "border-gray-300 bg-white hover:border-blue-400"}`}>
                                        <div className={`rounded-md p-2 ${selected === item.id ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500"}`}>
                                            {item.icon}
                                        </div>

                                        <div className="text-left">
                                            <h3 className="font-semibold text-gray-800">{item.title}</h3>
                                            <p className="text-sm text-gray-500">{item.subtitle}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="border border-[var(--border)] p-5 rounded-lg shadow-lg">
                        <h1>Category Configuration</h1>
                        <div className="flex  gap-2 flex-wrap mt-2">
                            {selected == "technical" ?
                                technical.map((lang) => {
                                    const active = selectedLanguage.includes(lang);

                                    return (
                                        <button
                                            key={lang}
                                            onClick={() => toggleLanguage(lang)}
                                            className={`flex items-center hover:cursor-pointer gap-2 rounded-full border px-3 py-1 font-medium transition-all duration-200 ${active ? "border-blue-700 bg-blue-50 text-blue-700" : "border-gray-300 bg-white text-gray-800 hover:border-blue-400"}`}>
                                            <span>{lang}</span>
                                        </button>
                                    );
                                })
                                :
                                nonTechnical.map((lang) => {
                                    const active = selectedNonTechnical.includes(lang);
                                    return (
                                        <button
                                            key={lang}
                                            onClick={() => toggleNonTechnical(lang)}
                                            className={`flex items-center  hover:cursor-pointer gap-2 rounded-full border px-3 py-1 font-medium transition-all duration-200 ${active ? "border-blue-700 bg-blue-50 text-blue-700" : "border-gray-300 bg-white text-gray-800 hover:border-blue-400"}`}>
                                            <span>{lang}</span>
                                        </button>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="border border-[var(--border)] p-5 rounded-lg shadow-lg">
                        <h1 className="font-bold text-xl">Assessment Parameters</h1>
                        <div>
                            <div className="mt-5">
                                <p>Difficulty Level</p>
                                <div className="flex justify-around mt-1 flex-wrap gap-2">
                                    {difficulty.map((val, inx) => {
                                        return (
                                            <button key={inx} onClick={() => { setDiffi(val) }} className={` hover:cursor-pointer  px-5 py-1 border border-[var(--border)] rounded ${diffSelected == val ? "bg-blue-100 text-blue-500 border-blue-500" : ""}`}>{val}</button>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-2 mt-5 gap-2">
                                <div className="border border-[var(--border)] p-4 bg-blue-100/30  rounded ">
                                    <p>MCQ Configuration</p>
                                    <div className="grid grid-cols-2 gap-2 mt-5">
                                        <div>
                                            <label htmlFor="">No. of Questions</label>
                                            <input onWheel={(e) => e.target.blur()} onChange={(e) => { handleSetValues('mcq', e.target.value) }} type="number" className="border border-[var(--border)] w-full rounded p-2 bg-white " />
                                        </div>
                                        <div>
                                            <label htmlFor="">Marks/Question</label>
                                            <input onWheel={(e) => e.target.blur()} onChange={(e) => { handleSetValues('mcqMark', e.target.value) }} type="number" className="border border-[var(--border)] w-full rounded  p-2 bg-white" />
                                        </div>
                                    </div>
                                </div>
                                <div className="border border-[var(--border)] p-4 bg-blue-100/30  rounded ">
                                    <p>Coding Configuration</p>
                                    <div className="grid grid-cols-2 gap-2 mt-5">
                                        <div>
                                            <label htmlFor="">No. of Questions</label>
                                            <input onWheel={(e) => e.target.blur()} onChange={(e) => { handleSetValues('codeingProblems', e.target.value) }} type="number" className="border border-[var(--border)] w-full rounded p-2 bg-white " />
                                        </div>
                                        <div>
                                            <label htmlFor="">Marks/Question</label>
                                            <input onWheel={(e) => e.target.blur()} onChange={(e) => { handleSetValues('codeMark', e.target.value) }} type="number" className="border border-[var(--border)] w-full rounded  p-2 bg-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" space-y-5">
                    <div className="p-4  space-y-5 bg-blue-800 text-gray-300 rounded-xl">
                        <h1>Assessment Summary</h1>
                        <div className="flex justify-between w-full">
                            <p className="font-bold">Total Duration</p>
                            <p className="font-bold">{values.duration}:Min</p>
                        </div>
                        <div className="flex justify-between w-full">
                            <p className="font-bold">MCQ Points</p>
                            <p className="font-bold">{values.mcqMark * values.mcq}:Pts</p>
                        </div>
                        <div className="flex justify-between w-full">
                            <p className="font-bold">Coding Points</p>
                            <p className="font-bold">{values.codeingProblems * values.codeMark}Pts</p>
                        </div>
                        <hr />
                        <p>Calculated Score</p>
                        <h1 className="text-6xl text-blue-200 font-bold">{(values.codeingProblems * values.codeMark) + (values.mcqMark * values.mcq)}</h1>
                    </div>
                    <div className="p-4  border border-[var(--border)] rounded-xl space-y-2">
                        <button className="w-full h-20 bg-blue-800 hover:cursor-p rounded-xl border border-[var(--border)] font-bold text-lg text-white hover:cursor-pointer" onClick={() => { handleCreateAssment() }}>Create Assessment</button>
                        <button className="w-full h-20 bg-white hover:cursor-p rounded-xl border border-[var(--border)] font-bold text-lg text-blue-800 hover:cursor-pointer">Save as Draft</button>
                        <center><p className="text-center text-xs w-[80%]">By clicking create, you agree to distribute this assessment to all assigned batches.</p></center>
                    </div>
                    <div className="border border-[var(--border)] p-4 rounded-xl">
                        <p className="font-bold text-blue-800">Pro tip</p>
                        <i className="">"Mixed difficulty assessments typically see 15% higher completion rates among foundation level students."</i>
                    </div>
                </div>
            </div>
        </div>
    )
}