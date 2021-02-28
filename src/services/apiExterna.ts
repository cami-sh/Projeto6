import axios from 'axios'

const baseApiExterna = "https://v2.api.forex/infos"

const apiExterna = axios.create({
    baseURL: baseApiExterna
})

export default apiExterna