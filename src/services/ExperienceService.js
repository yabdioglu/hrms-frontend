import axios from "axios";

export default class ExperienceService {
    getByCurriculumId(cvId) {
        return axios.get(`/api/cvExperiences/getByCurriculumId?curriculumId=${cvId}`)
    }

    addExperience(values){
        return axios.post("/api/cvExperiences/addExperience", values)
    }

    deleteExperience(experienceId){
        return axios.delete(`/api/cvExperiences/deleteExperience?experienceId=${experienceId}`)
    }

}