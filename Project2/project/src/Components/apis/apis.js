const LOCAL_LOGIN_API_BASE_URL = 'http://localhost:4200/api'

const loginApi = async (accountInfo) => {
  const response = await fetch(`${LOCAL_LOGIN_API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(accountInfo),
  })
  return response
}

const logoutApi = async () => {
  const response = await fetch(`${LOCAL_LOGIN_API_BASE_URL}/logout`, {
    method: 'POST',
  })
  return response
}

const regApi = async (regInfo) => {
  const response = await fetch(`${LOCAL_LOGIN_API_BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(regInfo),
  })

  return response
}

export default {
  loginApi,
  logoutApi,
  regApi,
}
