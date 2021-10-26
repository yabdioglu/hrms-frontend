import axios from "axios"

export default class LanguageService {
    getByCurriculumId(cvId) {
        return axios.get(`http://localhost:8080/api/cvLanguage/getByCurriculumId?curriculumId=${cvId}`)
    }

    addLanguage(values){
        return axios.post(`http://localhost:8080/api/cvLanguage/addLanguage`, values)
    }

    getLanguages(){
        return axios.get(`http://localhost:8080/api/languages/getAll`)
    }

    deleteLanguage(languageId){
        return axios.delete(`http://localhost:8080/api/cvLanguage/deleteLanguage?languageId=${languageId}`)
    }
}