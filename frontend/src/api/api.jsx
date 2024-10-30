import axios from 'axios'

//criando a configuração do axios para o front conectar com o backend
const api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if(token){
            //passar ele no authorization da requisição
            config.headers.Authorization = token
        }
        return config
    }
)

export default api;