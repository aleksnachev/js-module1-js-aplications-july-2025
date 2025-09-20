import { getAllTips } from '../data/data.js'
import {html} from '../lib.js'

const catalogTemplate = (tips) => html`
     <h3 class="heading">Mindful Tips</h3>
      <section id="tips-dashboard">
        ${tips.length 
            ? tips.map(tipTemplate) 
            : html`<h3 class="empty">No Mindful Tips Added Yet.</h3>`}
        
      </section>
      `

const tipTemplate = (tip) => html`
        <div class="tip">
          <img src="${tip.imageUrl}"/>
          <h3 class="title"> ${tip.title}</h3>
          <div class="tip-info">
            <p class="type">Type: ${tip.type}</p>
            <p class="difficulty">Difficulty: ${tip.difficulty}</p>
          </div>
          <a class="details-btn" href="/catalog/${tip._id}">View Tip</a>
        </div>`



export async function catalogView(ctx){
    const mindfulTips = await getAllTips()
    ctx.render(catalogTemplate(mindfulTips))
}