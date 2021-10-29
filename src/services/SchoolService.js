import axios from "axios";

export default class SchoolService{
    getByCurriculumId(cvId) {
        return axios.get(`/api/cvSchools/getByCurriculumId?curriculumId=${cvId}`)
    }

    addSchool(values){
        return axios.post("/api/cvSchools/addSchool", values)
    }

    deleteSchool(schoolId){
        return axios.delete(`/api/cvSchools/deleteSchool?schoolId=${schoolId}`)
    }
}