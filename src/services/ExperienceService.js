import axios from "axios";

export default class ExperienceService {
    getByCurriculumId(cvId) {
        return axios.get(`http://localhost:8080/api/cvExperiences/getByCurriculumId?curriculumId=${cvId}`)
    }

    addExperience(values){
        return axios.post("http://localhost:8080/api/cvExperiences/addExperience", values)
    }

    deleteExperience(experienceId){
        return axios.delete(`http://localhost:8080/api/cvExperiences/deleteExperience?experienceId=${experienceId}`)
    }

}