import axios from 'axios'
const apiGithub = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    'Content-Type': 'application/json'
    // 'Authorization': `Bearer ${process.env.TOKEN_AUTHER}`,
  }
})

export default apiGithub
