import axios from "axios"
const baseURL="http://localhost:8080/api/codeEngine"
export default new class Service {

    addQuestion(question){
        return axios.post(`${baseURL}/addQuestion`,question)
    }
}