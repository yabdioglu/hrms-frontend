import axios from "axios"

export default class JobAdvertisementService {
    getJobAdvertisements() {
        return axios.get("http://localhost:8080/api/jobAdvertisements/getAll")
    }

    getByJobAdvertisementId(jobAdvertisementId) {
        return axios.get("http://localhost:8080/api/jobAdvertisements/getByJobAdvertisementId?jobAdvertisementId=" + jobAdvertisementId)
    }

    getByConfirmed(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getByConfirmed")
    }

    jobAdvertisementAdd(values){
        return axios.post("http://localhost:8080/api/jobAdvertisements/addJobAdvertisements",values)
    }
    
    jobAdvertisementConfirm(values){
        return axios.post(`http://localhost:8080/api/jobAdvertisementconfirms/confirmJobAdvertisement`,values)
    }
}