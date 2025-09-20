import {render} from '../lib.js'

//TODO Use root element from project index
const root = document.querySelector('main')

export function addRender(ctx,next){
    ctx.render = (templateResult) => render(templateResult, root)

    next()
}