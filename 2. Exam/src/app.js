import { logout } from './data/user.js'
import {page} from './lib.js'
import {addRender} from './utils/render.js'
import { updateNav } from './utils/utils.js'
import { catalogView } from './views/catalog.js'
import { createView } from './views/create.js'
import { detailsView } from './views/details.js'
import { editView } from './views/edit.js'

import {homeView} from './views/home.js'
import { loginView } from './views/login.js'
import { registerView } from './views/register.js'

updateNav()
document.getElementById('logoutBtn').addEventListener('click', () => {
    logout()
    updateNav()
    page.redirect('/')
} )

page(addRender)

//TODO Bind project URLs to view handlers
page('/',homeView)
page('/login',loginView)
page('/register',registerView)
page('/catalog',catalogView)
page('/catalog/:id', detailsView )
page('/create', createView)
page('/edit/:id', editView)

page.start()