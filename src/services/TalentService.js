import axios from "axios"

export default class TalentService{
    getByCurriculumId(cvId) {
        return axios.get(`/api/cvTalents/getByCurriculumId?curriculumId=${cvId}`)
    }

    addTalent(values){
        return axios.post(`/api/cvTalents/addTalent`, values)
    }

    deleteTalent(talentId){
        return axios.delete(`/api/cvTalents/deleteTalent?talentId=${talentId}`)
    }

    getTalents(){
        return axios.get(`/api/talents/getAll`)
    }
}