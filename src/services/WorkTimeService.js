import axios from "axios"

export default class WorkTimeService {
    getWorkTimes() {
        return axios.get("/api/worktimes/getAll");
    }
}