import axios from "axios"

export default class LanguageService {
    getByCurriculumId(cvId) {
        return axios.get(`/api/cvLanguage/getByCurriculumId?curriculumId=${cvId}`)
    }

    addLanguage(values){
        return axios.post(`/api/cvLanguage/addLanguage`, values)
    }

    getLanguages(){
        return axios.get(`/api/languages/getAll`)
    }

    deleteLanguage(languageId){
        return axios.delete(`/api/cvLanguage/deleteLanguage?languageId=${languageId}`)
    }
}