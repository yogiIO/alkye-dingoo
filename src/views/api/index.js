import axios from "axios"

async function getArticles(accessToken) {
  const response = await axios({
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://untitled-twkmuar27a-uc.a.run.app/api',
    headers: {
      'Authorization': `Token ${accessToken}`
    }
  })

  return response
}

async function signUp( username, password) {
  let response;
  try {
    response = await axios({
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://untitled-twkmuar27a-uc.a.run.app/api/login/',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        username: username,
        password: password
      }
    })

  } catch (error) {
    throw Error('No User found')
  }
  return response.data
}

export { getArticles, signUp }