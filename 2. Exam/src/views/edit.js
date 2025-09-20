import { createTip, getTipById, updateTip } from '../data/data.js'
import {html} from '../lib.js'
import { showError } from '../utils/notify.js'

const editTemplate = (tipData, onEdit) => html`
    <section id="edit">
        <div class="form form-item">
          <h2>Edit Your Item</h2>
          <form class="edit-form" @submit = ${onEdit}>
            <input type="text" name="title" id="title" placeholder="Title" .value = ${tipData.title} />
            <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" .value = ${tipData.imageUrl}/>
            <input type="text" name="type" id="type" placeholder="Type" .value = ${tipData.type}/>
            <select name="difficulty" id="difficulty" .value = ${tipData.difficulty}>
              <option value="" disabled selected>Difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="50" .value = ${tipData.description}></textarea>
            <button type="submit">Edit</button>
          </form>
        </div>
    </section>
`

export async function editView(ctx){

    const id = ctx.params.id
    
    const tipData = await getTipById(id)

    ctx.render(editTemplate(tipData, onEdit))
    
    async function onEdit(event) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const {
            title,
            imageUrl, 
            type, 
            difficulty,
            description
        }  = Object.fromEntries(formData.entries())

        try {
            if (!title || !imageUrl || !type || !difficulty || !description){
                throw new Error ('All fields are required')
            }

            await updateTip(id, title,imageUrl,type,difficulty,description)

            ctx.page.redirect('/catalog/' + id)
            
        } catch (err) {
            showError(err)
        }

    }
}