import axios from "axios";

export const candidateSignup = (body) => {
    return axios.post('/api/auth/registerCandidate', body)
}

export const employeeSignup = (body) => {
    return axios.post(`/api/auth/registerEmployee`,body)
}

export const employerSignup = (body) => {
    return axios.post(`/api/auth/registerEmployer`, body)
}

export const  addJobAddToCandidateFavorites = (values) => {
    return axios.post(`/api/candidates/addJobAdvertisementToCandidateFavorites`,values)
}