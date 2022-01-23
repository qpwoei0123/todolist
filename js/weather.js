const API_KEY = "a5bd217ff83943b283e0eac706747464";

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

function onGeoOk(info){
    const lat = info.coords.latitude;
    const lon = info.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weathers span:first-child");
            const temp = document.querySelector("#weathers span:nth-child(2)");
            const city = document.querySelector("#weathers span:last-child");
            weather.innerText = ` /${data.weather[0].main}`;
            city.innerText = `${data.name}`
            temp.innerText = `: ${data.main.temp}℃`
        })
}
    

function onGeoError(){
    alert("GeoError")
}
