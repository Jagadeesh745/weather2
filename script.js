const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '61f1af8758mshd48ddf0d1d91541p1bbdaejsn0ca8e3682abe',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};
const getweather = (city)=>{
  cityName.innerHTML = city;
  const url=`https://weatherapi-com.p.rapidapi.com/current.json?q=cityName=`+city
  fetch(url, options)
	.then(response => response.json())
	.then((response) => {
    console.log(response)
    cloud.innerHTML=response.current.cloud;      
    humidity.innerHTML=response.current.humidity;
    humidity6.innerHTML=response.current.humidity;
    pressure_in.innerHTML=response.current.pressure_in;
    pressure_mb.innerHTML=response.current.pressure_mb;
    temp_c.innerHTML=response.current.temp_c;
    temp_c6.innerHTML=response.current.temp_c;
    temp_f.innerHTML=response.current.temp_f;
    wind_degree.innerHTML=response.current.wind_degree;
    wind_dir.innerHTML=response.current.wind_dir;
    wind_kph.innerHTML=response.current.wind_kph;
    wind_kph6.innerHTML=response.current.wind_kph;
  })
  const url2=`https://weatherapi-com.p.rapidapi.com/current.json?q=cityName=New Delhi`
  fetch(url2, options)
	.then(response => response.json())
	.then((response) => {
    console.log(response)
    cloud2.innerHTML=response.current.cloud;      
    humidity2.innerHTML=response.current.humidity;
    pressure_in2.innerHTML=response.current.pressure_in;
    pressure_mb2.innerHTML=response.current.pressure_mb;
    temp_c2.innerHTML=response.current.temp_c;
    temp_f2.innerHTML=response.current.temp_f;
    wind_degree2.innerHTML=response.current.wind_degree;
    wind_dir2.innerHTML=response.current.wind_dir;
    wind_kph2.innerHTML=response.current.wind_kph;
  })
  const url3=`https://weatherapi-com.p.rapidapi.com/current.json?q=cityName=Hyderabad`
  fetch(url3, options)
	.then(response => response.json())
	.then((response) => {
    console.log(response)
    cloud3.innerHTML=response.current.cloud;      
    humidity3.innerHTML=response.current.humidity;
    pressure_in3.innerHTML=response.current.pressure_in;
    pressure_mb3.innerHTML=response.current.pressure_mb;
    temp_c3.innerHTML=response.current.temp_c;
    temp_f3.innerHTML=response.current.temp_f;
    wind_degree3.innerHTML=response.current.wind_degree;
    wind_dir3.innerHTML=response.current.wind_dir;
    wind_kph3.innerHTML=response.current.wind_kph;
  })
  const url4=`https://weatherapi-com.p.rapidapi.com/current.json?q=cityName=Raipur`
  fetch(url4, options)
	.then(response => response.json())
	.then((response) => {
    console.log(response)
    cloud4.innerHTML=response.current.cloud;      
    humidity4.innerHTML=response.current.humidity;
    pressure_in4.innerHTML=response.current.pressure_in;
    pressure_mb4.innerHTML=response.current.pressure_mb;
    temp_c4.innerHTML=response.current.temp_c;
    temp_f4.innerHTML=response.current.temp_f;
    wind_degree4.innerHTML=response.current.wind_degree;
    wind_dir4.innerHTML=response.current.wind_dir;
    wind_kph4.innerHTML=response.current.wind_kph;
  })
  /*const url5=`https://weatherapi-com.p.rapidapi.com/current.json?q=cityName=New York`
  fetch(url5, options)
	.then(response => response.json())
	.then((response) => {
    console.log(response)
    cloud5.innerHTML=response.current.cloud;      
    humidity5.innerHTML=response.current.humidity;
    pressure_in5.innerHTML=response.current.pressure_in;
    pressure_mb5.innerHTML=response.current.pressure_mb;
    temp_c5.innerHTML=response.current.temp_c;
    temp_f5.innerHTML=response.current.temp_f;
    wind_degree5.innerHTML=response.current.wind_degree;
    wind_dir5.innerHTML=response.current.wind_dir;
    wind_kph5.innerHTML=response.current.wind_kph;
  })*/
}
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    getweather(city.value);
});

getweather("Raipur");
