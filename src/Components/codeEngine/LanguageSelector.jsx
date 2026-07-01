import { LANGUAGE_VERSIONS } from "./Values"

export default function LanguageSelector({ language, selectLanguage, setVersion }) {

    const datas = Object.entries(LANGUAGE_VERSIONS)
    return (
        <div>
            <div className="w-full bg-[#1E1E1E]">
                <select name="" id="" className=" text-white p-2 rounded" onChange={(e) => { selectLanguage(e.target.value) }}>
                    {datas.map(([val, version, inx]) => {
                        return (
                            <option key={inx} value={val.name} className={`text-black`}>{val}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}