const body= document.querySelector("body"); 
const searchInput= document.querySelector(".search-input");
const searchbtn = document.querySelector(".search-button");



searchbtn.addEventListener("click" , () => {
  getWeather(searchInput.value);
});

const apiKey = '04011c7b23eaffbbf1efed9f99219d27';
async function getWeather(city){
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  let data = await response.json();
  console.log(data);
  document.querySelector(".temperature").innerHTML= `${Math.round(data.main.temp)}<sup>o</sup>C`
  document.querySelector(".type").innerHTML= `${data.weather[0].description}`;
  document.querySelector(".city").innerHTML= `${data.name}`;
  document.querySelector(".wind-speed").innerHTML= `Wind Speed: ${data.wind.speed} km/hr`;
  document.querySelector(".feels").innerHTML= `Feels LIke: ${Math.round(data.main.feels_like)}<sup>o</sup>C`; 
  document.querySelector(".humidity").innerHTML= `Humidity: ${data.main.humidity}%`;

  let mainBlock = document.querySelector(".main-block");
  console.log()

  if(data.weather[0].main === "Clouds"){
    document.querySelector(".show-icon").src = "icons/clouds.png";
    mainBlock.style.backgroundImage = "url('images/cloudBg.jpg')"
  }
  else if(data.weather[0].main === "Clear"){
    document.querySelector(".show-icon").src = "icons/sun.png";
    mainBlock.style.backgroundImage = "url('images/sunny.avif')"
  }
  else if(data.weather[0].main === "Rain"){
    document.querySelector(".show-icon").src = "icons/rainy-day.png";
    mainBlock.style.backgroundImage = "url('images/rain.webp')"
  }
  else if(data.weather[0].main === "Windy"){
    document.querySelector(".show-icon").src = "icons/windy.png";
    mainBlock.style.backgroundImage = "url('images/snow.jpg')"
  }
  else if(data.weather[0].main === "Snowy"){
    document.querySelector(".show-icon").src = "icons/snowflake.png";
    mainBlock.style.backgroundImage = "url('images/download.jpg')"
  }
}

getWeather("Lucknow");
