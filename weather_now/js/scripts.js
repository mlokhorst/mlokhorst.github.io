//f8bf3ee912539bb48b67cc3dfc427099
const weatherObject = new XMLHttpRequest();

weatherObject.open("GET","//api.openweathermap.org/data/2.5/weather?zip=55386,us&appid=f8bf3ee912539bb48b67cc3dfc427099",true)
weatherObject.send();
weatherObject.onload = function() {
    let weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
}//end of onload