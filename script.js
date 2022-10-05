const weatherBtn = document.querySelector('button')
const inputBox = document.querySelector('input')
const feels_like = document.getElementById('feels_like')
const main_temp = document.getElementById('main_temp')
const city_name = document.getElementById('city_name')
const description = document.getElementById('description')

weatherBtn.addEventListener('click', (e) => {
     e.preventDefault()
    console.log(inputBox.value)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputBox.value}&units=imperial&appid=26ebea8ed348135195f7f6a703585e09`)
        .then((res) => res.json())
        .then((data) => {
            city_name.innerText = "Current City: " + data.name
            main_temp.innerText = "Temperature Outside: " + Math.round(data.main.temp) + "°F"    
            feels_like.innerText = "Feels like: " + Math.round(data.main.feels_like) + "°F"
            description.innerText = "Weather: " + data.weather[0].description

        })
        .catch((err) => console.log(err));
})