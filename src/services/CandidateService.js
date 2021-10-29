import axios from "axios"

export default class CandidateService {
    addJobAdvertisementToCandidateFavorites(values) {
        return axios.post(`/api/candidates/addJobAdvertisementToCandidateFavorites`,values)
    }
    registerCandidate(body){
        return axios.post(`/api/auth/registerCandidate`,body)
    }
}