const apiKey = "214575990ae64f5b9327fc5400d631bd";
let latitude = 0, longitude = 0;
const weatherforecast = [];

function findWeather() {
    var city_name = document.getElementById("city-name").value;
    var url_city = "https://api.openweathermap.org/data/2.5/forecast?q=" + city_name + "&appid=" + apiKey
    var city,country,population;


    fetch(url_city)
        .then((Response) => Response.json())
        .then((data) => {
            latitude = data.city.coord.lat;
            longitude = data.city.coord.lon;
            city = data.city.name;
            country = data.city.country;
            population = data.city.population;
            console.log(data);
            console.log(data.city.name);
            console.log(data.city.country);
            console.log(data.city.population);
            document.getElementById("city").innerHTML = "City : " + city;
            document.getElementById("country-name").innerHTML = "Country : " + country;
            document.getElementById("popu").innerHTML = "Population : " + population;
        });


    var url_lat_lon = "https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&hourly=temperature_2m&current_weather=true";
    fetch(url_lat_lon)
        .then((Response) => Response.json())
        .then((data) => {
            console.log(data);
            for (let i = 0; i < 7; i++) {
                console.log(data.hourly.temperature_2m[i * 24]);
                weatherforecast[i] = data.hourly.temperature_2m[i * 24];
            }

            
            document.getElementById("temp1").innerHTML = "Monday : " + weatherforecast[0] +"°C";
            document.getElementById("temp2").innerHTML = "Teusday : " + weatherforecast[1] +"°C";
            document.getElementById("temp3").innerHTML = "Wednesday : " + weatherforecast[2] +"°C";
            document.getElementById("temp4").innerHTML = "Thursday : " + weatherforecast[3] +"°C";
            document.getElementById("temp5").innerHTML = "Friday : " + weatherforecast[4] +"°C";
            document.getElementById("temp6").innerHTML = "Saturday : " + weatherforecast[5] +"°C";
            document.getElementById("temp7").innerHTML = "Sunday : " + weatherforecast[6] +"°C";


        });

}
