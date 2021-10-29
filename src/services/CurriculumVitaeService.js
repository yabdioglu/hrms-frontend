import axios from "axios";

export default class CurriculumVitaeService {
    getByCurriculumVitaeId(curriculumId) {
        return axios.get("/api/curriculumVitae/getByCurriculumId?curriculumId=" + curriculumId)
    }

    updateSummary(summary, cvId){
        return axios.put(`/api/curriculumVitae/updateSummary?cvId=${cvId}&summary=${summary}`)
    }

    updateGithub(github, cvId){
        return axios.put(`/api/curriculumVitae/updateGithub?cvId=${cvId}&github=${github}`)
    }

    updateLinkedIn(linkedin, cvId){
        return axios.put(`/api/curriculumVitae/updateLinkedIn?cvId=${cvId}&linkedin=${linkedin}`)
    }

    updateImage(multipartFile, cvId){
        return axios.post(`/api/curriculumVitae/imageUpload?curriculumVitaeId=${cvId}`,multipartFile)
    }

    
}