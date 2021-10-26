import axios from "axios";

export default class SchoolService{
    getByCurriculumId(cvId) {
        return axios.get(`http://localhost:8080/api/cvSchools/getByCurriculumId?curriculumId=${cvId}`)
    }

    addSchool(values){
        return axios.post("http://localhost:8080/api/cvSchools/addSchool", values)
    }

    deleteSchool(schoolId){
        return axios.delete(`http://localhost:8080/api/cvSchools/deleteSchool?schoolId=${schoolId}`)
    }
}