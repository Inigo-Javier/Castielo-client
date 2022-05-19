import axios from 'axios'

class PlacesService {

    constructor() {

        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/places` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllPlaces = () => {
        return this.api.get(`/`)
    }

    getOnePlace = id => {
        return this.api.get(`/${id}`)
    }

    savePlace = place => {
        return this.api.post('/create', place)
    }
}

const placesService = new PlacesService()

export default placesService