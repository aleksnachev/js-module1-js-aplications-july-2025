
function attachEvents() {
    const getWeatherBtnRef = document.getElementById('submit').addEventListener('click',onClick)

    const BASEURL = "http://localhost:3030/jsonstore/forecaster"
    const forecastRef = document.getElementById('forecast')
    
    const currentConditions = document.getElementById('current')
    const threeDayForecast = document.getElementById('upcoming')
    
    
    const conditions = {
        "Sunny":"&#x2600",
        "Partly sunny": "&#x26C5",
        'Overcast': '&#x2601',
        'Rain':'&#x2614',
        'Degrees': '&#176'
    }

    async function onClick(){
        forecastRef.style.display = 'block'
        const locationRef = document.getElementById('location')
        const locationValue = locationRef.value
        locationRef.value = ''
        
        const responce = await fetch(BASEURL + '/locations')
        const data = await responce.json()
        
        const findetCity = data.find(x => x.name === locationValue)
        
        const currentRespond = await fetch(BASEURL + `/today/${findetCity.code}`)
        const currentData = await currentRespond.json()
        console.log(currentData);
        
        currentConditions.innerHTML = `<div class="label">Current conditions</div><div class="forecasts">
      <span class="condition symbol">${conditions[currentData.forecast.condition]}</span>
      <span class="condition">
        <span class="forecast-data">${currentData.name}</span>
        <span class="forecast-data">${currentData.forecast.low}${conditions.Degrees}/${currentData.forecast.high}${conditions.Degrees}</span>
        <span class="forecast-data">${currentData.forecast.condition}</span>
      </span>
    </div>`

        const threeDayRespond = await fetch(BASEURL + `/upcoming/${findetCity.code}`)
        const threeDayData = await threeDayRespond.json()
        console.log(threeDayData);
        threeDayForecast.innerHTML =`<div id="upcoming">
                <div class="label">Three-day forecast</div>
            </div>`
         
       for (const el of threeDayData.forecast) {
        console.log(el);
        
                    threeDayForecast.innerHTML += `
                <span class="upcoming">
                    <span class="symbol">${conditions[el.condition]}</span>
                    <span class="forecast-data">${el.low}${conditions.Degrees}/${el.high}${conditions.Degrees}</span>
                    <span class="forecast-data">${el.condition}</span>
                </span>`
       } 
    }   

    
}

attachEvents();