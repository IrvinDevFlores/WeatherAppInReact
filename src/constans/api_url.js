const api_key = '40746d6cc31834e4f0f7f7b648ab1e95';
const location = 'Buenos Aires, Argentina';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather'

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;