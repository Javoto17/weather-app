export const groupByFieldTemp = (list, fieldTemp = 'temp') => {
  const groups = list.reduce((groups, item) => {
    if (!groups[fieldTemp]) {
      groups[fieldTemp] = []
    }

    groups[fieldTemp].push({
      x: item.dt,
      y: item.main[fieldTemp]
    })
    return groups
  }, {})
  return groups
}

export const createDataTempByField = (list, field) => {
  return list.map((item) => {
    return {
      x: item.dt,
      y: item.main[field]
    }
  })
}

export const createDataHumidity = (list) => {
  return list.map((item) => {
    return {
      time: item.dt,
      humidity: item.main.humidity
    }
  })
}

export const createDataPressure = (list) => {
  return list.map((item) => {
    return {
      time: item.dt,
      pressure: item.main.pressure,
      sea_level: item.main.sea_level,
      grnd_level: item.main.grnd_level
    }
  })
}

export const createDataWind = (list) => {
  return list.map((item) => {
    return {
      time: item.dt,
      speed: item.wind.speed,
      deg: item.wind.deg
    }
  })
}
