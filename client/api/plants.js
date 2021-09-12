import request from 'superagent'

export const getPlants = () => {
  return request
    .get('/api/v1/plants')
    .then(res => res.body)
}

export const getOnePlant = (id) => {
  return request
    .get('/api/v1/plants/' + id)
    .then(res => res.body)
}
