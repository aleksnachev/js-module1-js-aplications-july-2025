import { getDroneById, updateDrone } from '../data/drones.js'
import {html} from '../lib.js'

const editTemplate = (droneData, onEdit) => html`
    <section id="edit">
        <div class="form form-item">
          <h2>Edit Offer</h2>
          <form class="edit-form" @submit = ${onEdit}>
            <input type="text" name="model" id="model" placeholder="Drone Model" .value = ${droneData.model}/>
            <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" .value = ${droneData.imageUrl}/>
            <input type="number" name="price" id="price" placeholder="Price" .value = ${droneData.price}/>
            <input type="number" name="weight" id="weight" placeholder="Weight" .value = ${droneData.weight}/>
            <input type="number" name="phone" id="phone" placeholder="Phone Number for Contact" .value = ${droneData.phone}/>
            <input type="text" name="condition" id="condition" placeholder="Condition" .value = ${droneData.condition}/>
            <textarea name="description" id="description" placeholder="Description" .value = ${droneData.description}></textarea>
            <button type="submit">Edit</button>
          </form>
        </div>
    </section>
`

export async function editView(ctx){

    const id = ctx.params.id
    const droneData = await getDroneById(id)   
    debugger
    ctx.render(editTemplate(droneData, onEdit))

    async function onEdit(event){
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const {
            model,
            imageUrl,
            price,
            weight,
            phone,
            condition,
            description
        } = Object.fromEntries(formData.entries())
        
        try{
            if (!model || !imageUrl || !price || !weight || !phone || !condition || !description){
                throw new Error ('All fields are required')
            }
            
            await updateDrone(id, {model,imageUrl,price,condition,weight,phone,description})
        
            ctx.page.redirect('/catalog/' + id)
            } catch (err){
                alert(err.message)
            }
    }
}