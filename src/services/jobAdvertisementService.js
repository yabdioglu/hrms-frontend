import axios from "axios"

export default class JobAdvertisementService {
    getJobAdvertisements() {
        return axios.get("/api/jobAdvertisements/getAll")
    }

    getByJobAdvertisementId(jobAdvertisementId) {
        return axios.get("/api/jobAdvertisements/getByJobAdvertisementId?jobAdvertisementId=" + jobAdvertisementId)
    }

    getByConfirmed(){
        return axios.get("/api/jobAdvertisements/getByConfirmed")
    }

    jobAdvertisementAdd(values){
        return axios.post("/api/jobAdvertisements/addJobAdvertisements",values)
    }
    
    jobAdvertisementConfirm(values){
        return axios.post(`/api/jobAdvertisementconfirms/confirmJobAdvertisement`,values)
    }
}