import api from '../utils/api'

export async function getForecast () {
  const res = await fetch(
    `${api.API_URL}forecast?q=Barcelona&units=metric&APPID=${api.API_KEY}`
  )
  const data = await res.json()

  return data
}
