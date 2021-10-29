import axios from "axios"

export default class WorkPlaceService {
    getWorkPlaces() {
        return axios.get("/api/workplaces/getAll")
    }
}