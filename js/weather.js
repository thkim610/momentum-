const API_KEY = "4bd88eeed86a9b9c5692046be64f0d03";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)    //js로 url을 불러옴
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError(){
  alert("위치를 찾지 못했습니다. 날씨를 제공할 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //브라우저에서 위치 좌표 호출

