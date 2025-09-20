import {get,post,put,del} from './request.js'

const endPoints = {
    recent: '/data/drones?sortBy=_createdOn%20desc',
    byId: '/data/drones/',
    create: '/data/drones/'
}

export async function getAllDrones() {
    return get (endPoints.recent)
}

export async function getDroneById(id) {
    return get (endPoints.byId + id)
}




export async function createDrone(
    model,
  imageUrl, 
  price, 
  condition,
  weight,
  phone,
  description

) {
    return post (endPoints.create , {
        model,
        imageUrl, 
        price, 
        condition,
        weight,
        phone,
        description
    })
}


export async function updateDrone(id,{
  model,
  imageUrl, 
  price, 
  condition,
  weight,
  phone,
  description
}) {
    return put (endPoints.byId + id,{
        model,
        imageUrl, 
        price, 
        condition,
        weight,
        phone,
        description
    })
}


export async function deleteDrone(id) {
    return del (endPoints.byId + id)
}