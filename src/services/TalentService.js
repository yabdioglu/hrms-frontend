import axios from "axios"

export default class TalentService{
    getByCurriculumId(cvId) {
        return axios.get(`http://localhost:8080/api/cvTalents/getByCurriculumId?curriculumId=${cvId}`)
    }

    addTalent(values){
        return axios.post(`http://localhost:8080/api/cvTalents/addTalent`, values)
    }

    deleteTalent(talentId){
        return axios.delete(`http://localhost:8080/api/cvTalents/deleteTalent?talentId=${talentId}`)
    }

    getTalents(){
        return axios.get("http://localhost:8080/api/talents/getAll")
    }
}