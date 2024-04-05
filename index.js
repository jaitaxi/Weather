// uishow
const uimaker = (data) => {
    let temp = `
        <div>
        <div class="weather-icon"><img src=./img/cloudy.png></div>
            <h1>${data.name}</h1>
            <h2>${data.main.temp}</h2>
            <h3>Maximum${data.main.temp_max}</h3>
            <h3>Minimum${data.main.temp_min}</h3>
           

        </div>`;
    document.getElementById("container").innerHTML = temp;
};


// get weather
const getweather = async (cityname) => {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=1c78752e7bab7623eeed243752a66bea&q=${cityname}&units=metric`);
    let data = await res.json();
    uimaker(data);
};


// data store
const handledata = (e) => {
    e.preventDefault();
    let cityname = document.getElementById("cityname").value;
    getweather(cityname);
};


document.getElementById("weather").addEventListener("submit", handledata);
