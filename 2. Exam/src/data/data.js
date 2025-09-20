import {get,post,put,del} from './request.js'

//TODO Modify endpoints according to exam description
const endPoints = {
    recent:'/data/mindfultips?sortBy=_createdOn%20desc',
    byId:'/data/mindfultips/',
    create: '/data/mindfultips'
}

export async function getAllTips() {
    return get(endPoints.recent)
}
export async function getTipById(id) {
    return get(endPoints.byId + id)
}

//TODO Enter records properties

export async function createTip(
  title,
  imageUrl, 
  type, 
  difficulty,
  description

) {
    // debugger
    return post(endPoints.create, {
  title,
  imageUrl, 
  type, 
  difficulty,
  description
} 
)
}

export async function updateTip(id,
  title,
  imageUrl, 
  type, 
  difficulty,
  description

) {
    return put(endPoints.byId + id, {
  title,
  imageUrl, 
  type, 
  difficulty,
  description
} 
)
}

export async function deleteTipById(id) {
    return del(endPoints.byId + id)
}