import api from "./api";

//user = será um objeto = { nome, email, senha}
export const createUser = async (user) => {
    const response = await api.post('/api/v1/user', user)

    console.log(response)

    return response.data

}

export const loginUser = async (email, senha) => {
    const response = await api.post(
        '/api/v1/login', 
        {email, senha})

    console.log(response)

    return response.data
}

export const getContext = async () => {
    const response = await api.get(
        '/api/v1/user/context')

    console.log(response)

    return response.data
}

//user = será um objeto = { nome, email, senha}
export const updateUser = async (id, user) => {
    const response = await api.put(`/api/v1/user/${id}`, user)

    console.log(response)

    return response.data
}

export const deleteUser = async (id) => {
    return api.put(`/api/v1/user/${id}`)

}