import axios from "axios"

export default class EmployerService {
    registerEmployer(body) {
        return axios.post(`/api/auth/registerEmployer`, body)
    }
}