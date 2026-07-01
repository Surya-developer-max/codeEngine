import { executeCode } from "./api";
import { LANGUAGE_VERSIONS } from "./Values";

export default function Output({ editorRef, language }) {
    const runCode = async () => {
        const sourceCode = editorRef.current.getValue();
        console.log(sourceCode);
        if (!sourceCode) return;
        try {
            const { } = await executeCode(language, sourceCode)
        } catch (error) {

        }
    };

    return (
        <div className="w-full h-full">
            <div className="w-full  h-full bg-[#1E1E1E]">
                <button
                    className=" text-white p-2 rounded mb-1 border  border-gray-600 m-1"
                    onClick={runCode}
                >
                    Run Code
                </button>
            </div>
        </div>
    );
}