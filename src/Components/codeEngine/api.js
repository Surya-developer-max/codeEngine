import axios from "axios"
import { LANGUAGE_VERSIONS } from "./Values";
const API = axios.create({
    baseURL: "http://localhost:8080/api/codeEngine",
});
export const executeCode = async (language, sourceCode) => {

    try {
        const response = await API.post("/runcode", {
            language: language,
            sourceCode: sourceCode
        });

        console.log(data);
    } catch (error) {
        console.log(error.response?.status);
        console.log(error.response?.data);
    }
    // return data
}