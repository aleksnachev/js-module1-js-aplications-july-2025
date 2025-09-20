import {get,post} from './request.js'
import { clearUserData, setUserData } from '../utils/utils.js'

const endPoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
}

//TODO Change identity if required by exam description
export async function login(email,password) {
    const result = await post(endPoints.login, {email,password})

    const userData = {
        id:result._id,
        accessToken:result.accessToken
    }

    setUserData(userData)
}

//TODO Change identity if required by exam description
export async function register(email,password) {
    const result = await post(endPoints.register, {email,password})

    const userData = {
        id:result._id,
        accessToken:result.accessToken
    }

    setUserData(userData)
}

export function logout(){
    get(endPoints.logout)
    clearUserData()
}