const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5a5841e139mshc5f38d6d2e78d71p13ba30jsnf0ad040df8ec',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  const getWeather = (city) => {
    cityName.innerHTML = city;
    async function fetchData() {
      try {
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
        const result = await response.text();
        const weatherData = JSON.parse(result);
        console.log(weatherData);
  
        // Access weather data properties
        feels_like.innerHTML = weatherData.feels_like;
        feels_like2.innerHTML = weatherData.feels_like;
        humidity.innerHTML = weatherData.humidity;
        max_temp.innerHTML = weatherData.max_temp;
        min_temp.innerHTML = weatherData.min_temp;
        min_temp2.innerHTML = weatherData.min_temp;
        sunrise.innerHTML = weatherData.sunrise;
        sunset.innerHTML = weatherData.sunset;
        temp.innerHTML = weatherData.temp;
        wind_degrees.innerHTML = weatherData.wind_degrees;
        wind_speed.innerHTML = weatherData.wind_speed;
        wind_speed2.innerHTML = weatherData.wind_speed;
  
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchData();
  };
  
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
  });
  
  getWeather("Delhi");
  
  async function fetchData2() {
    try {
      const response1 = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hathras', options);
      const result1 = await response1.text();
      const weatherData1 = JSON.parse(result1);
      console.log(weatherData1);

      // Access weather data properties
      tushar1.innerHTML = weatherData1.feels_like;

      tushar2.innerHTML = weatherData1.humidity;
      tushar3.innerHTML = weatherData1.max_temp;

      tushar4.innerHTML = weatherData1.min_temp;
      tushar5.innerHTML = weatherData1.sunrise;
      tushar6.innerHTML = weatherData1.sunset;
      tushar7.innerHTML = weatherData1.temp;
      tushar8.innerHTML = weatherData1.wind_degrees;
      tushar9.innerHTML = weatherData1.wind_speed;
      
    } catch (error) {
      console.error(error);
    }
  }
  fetchData2();

  async function fetchData3() {
    try {
      const response1 = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=agra', options);
      const result1 = await response1.text();
      const weatherData1 = JSON.parse(result1);
      console.log(weatherData1);

      // Access weather data properties
      tushars1.innerHTML = weatherData1.feels_like;

      tushars2.innerHTML = weatherData1.humidity;
      tushars3.innerHTML = weatherData1.max_temp;

      tushars4.innerHTML = weatherData1.min_temp;
      tushars5.innerHTML = weatherData1.sunrise;
      tushars6.innerHTML = weatherData1.sunset;
      tushars7.innerHTML = weatherData1.temp;
      tushars8.innerHTML = weatherData1.wind_degrees;
      tushars9.innerHTML = weatherData1.wind_speed;
      
    } catch (error) {
      console.error(error);
    }
  }
  fetchData3();