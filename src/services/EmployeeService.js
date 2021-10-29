import axios from "axios"

export default class EmployeeService {
    registerEmployee(body){
        return axios.post(`/api/auth/registerEmployee`,body)
    }
}