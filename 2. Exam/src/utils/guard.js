
import { getUserData } from "./utils.js";

export function hasUser(ctx,next){
    const userData = getUserData()

    if (!userData){
        //TODO Change url if needed
        ctx.page.redirect('/login')
        return
    }

    next()
}