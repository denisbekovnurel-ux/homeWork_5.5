import axios from 'axios'
// access token - токен доступа
// refresh token - тоен который ожевляет access token

const createAxios = () => axios.create({
    baseURL: 'https://edu-market.online/api/v1'
})

const $mainApi = createAxios()

export { $mainApi }