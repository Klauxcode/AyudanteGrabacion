import { API_BASE_URL, ACCESS_TOKEN_NAME } from '../../config/serverApiConfig'

import axios from 'axios'
import errorHandler from '../request/errorHandler'
import successHandler from '../request/successHandler'
import storePersist from '../../redux/storePersist'

import { getCookie, setCookie, deleteCookie } from './cookie'

export const login = async (loginAdminData) => {
  try {
    const response = await axios.post(
      API_BASE_URL + 'auth/singnin',
      loginAdminData
    )
    token.set(response.data.result.token)
    console.log(response.data.result)
    return successHandler(response)
  } catch (error) {
    return errorHandler(error)
  }
}

export const logout = () => {
  token.remove()
  storePersist.clear()
}

export const isLogin = {
  get: () => {
    return getCookie('auth')
  }
}

export const token = {
  get: () => {
    return getCookie(ACCESS_TOKEN_NAME)
  },
  set: (token) => {
    return setCookie(ACCESS_TOKEN_NAME, token)
  },
  remove: () => {
    return deleteCookie(ACCESS_TOKEN_NAME)
  }
}
