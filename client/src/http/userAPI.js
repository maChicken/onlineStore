import { $authHost, $host } from "./index"
import jwt_decode from "jwt-decode"

export const registration = async (mail, password) => {
    const {data} = await $host.post('api/user/registration', {mail, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (mail, password) => {
    const {data} = await $host.post('api/user/login', {mail, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}