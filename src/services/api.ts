import axios from 'axios'

const api = axios.create({
baseURL: 'https://aluno-backenddd.herokuapp.com'
})

export default api;