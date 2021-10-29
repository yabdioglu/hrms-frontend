import axios from "axios"

export default class JobTitleService {
    getJobTitles() {
        return axios.get("/api/job-titles/getAll")
    }
}