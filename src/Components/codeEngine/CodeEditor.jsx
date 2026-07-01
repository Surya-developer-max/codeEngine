import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import Output from "./Output";
import { CODE_SNIPPETS } from "./Values";

export default function CodeEditor() {
    const [value, setValue] = useState(`function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alex");
`)
    const editorRef = useRef();
    const [language, setLanguage] = useState('java')
    const [version, setVersion] = useState("17.0.8");
    function onMount(editor) {
        editorRef.current = editor;
        editor.focus();
    }
    function selectLanguage(language) {
        setLanguage(language)
        setValue(CODE_SNIPPETS[language])
    }
    // console.log(value, language)
    return (
        <div className="lg:grid-rows-[450px_200px] grid-rows-[450px_200px]  grid ">
            <div className="overflow-hidden border-b border-gray-400">
                <LanguageSelector selectLanguage={selectLanguage} language={language} setVersion={setVersion} />
                <Editor
                    className="w-full"
                    language={language}
                    theme="vs-dark"
                    value={value}
                    onMount={onMount}
                    onChange={(val) => { setValue(val) }}
                />
            </div>
            <Output editorRef={editorRef} language={language} />
        </div>
    );
}