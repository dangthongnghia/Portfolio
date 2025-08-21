import apiGithub from './apiAxios'

export const profileApi = async () => {
  const token = import.meta.env.VITE_TOKEN_AUTHER
  try {
    const res = await apiGithub.get('user', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res
  } catch (error) {
    console.error('Error fetching profile:', error)
    throw error
  }
}

export const publicRepo = async () => {
  const token = import.meta.env.VITE_TOKEN_AUTHER
  try {
    const res = await apiGithub.get('user/repos?sort=updated&per_page=20', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res
  } catch (error) {
    console.error('Error fetching profile:', error)
    throw error
  }
}