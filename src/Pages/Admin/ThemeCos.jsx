import { useContext } from "react";
import { uiTheme } from "../../Components/ThemeDesigner";

export default function ThemeCos() {
    const { theme, updateTheme } = useContext(uiTheme);

    return (
        <div className="w-full rounded-xl  bg-white p-5 shadow-lg">
            <h2 className="mb-5 text-xl font-semibold">
                Theme Designer
            </h2>

            {Object.entries(theme).map(([key, value]) => (
                <div key={key} className="mb-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg border" style={{ backgroundColor: value, }} />
                        <div>
                            <p className="capitalize font-medium">{key} </p>

                            <p className="text-xs text-gray-500">{value}</p>
                        </div>
                    </div>
                    <input type="color" value={value} onChange={(e) => updateTheme(key, e.target.value)} className="h-10 w-16 cursor-pointer border rounded" />
                </div>
            ))}
        </div>
    );
}