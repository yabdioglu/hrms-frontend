import axios from "axios"

export default class CandidateService {
    addJobAdvertisementToCandidateFavorites(values) {
        return axios.post(`http://localhost:8080/api/candidates/addJobAdvertisementToCandidateFavorites`,values)
    }
}