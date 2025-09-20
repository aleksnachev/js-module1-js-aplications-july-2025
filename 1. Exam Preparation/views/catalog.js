import { getAllDrones } from '../data/drones.js'
import {html} from '../lib.js'

const catalogTemplate = (drones) => html`
<h3 class="heading">Marketplace</h3>
      <section id="dashboard">
        ${drones.length 
            ? drones.map(droneCard) 
            : html`<h3 class="no-drones">No Drones Available</h3>`}
      </section>
      <!-- Display an h2 if there are no posts -->
      
`
const droneCard = (drone) => html`
<div class="drone">
          <img src=${drone.imageUrl} />
          <h3 class="model">${drone.model}</h3>
          <div class="drone-info">
            <p class="price">Price: €${drone.price}</p>
            <p class="condition">Condition: ${drone.condition}</p>
            <p class="weight">Weight: ${drone.weight}g</p>
          </div>
          <a class="details-btn" href="/catalog/${drone._id}">Details</a>
        </div>
`

export async function catalogView(ctx){
    const drones = await getAllDrones()
    ctx.render(catalogTemplate(drones))
}