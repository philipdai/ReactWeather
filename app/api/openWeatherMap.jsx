let axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d943dd7ab7fa9d98c2c030049fb6eb85&units=metric';

module.exports = {
  getTemp: function (location) {
    let encodedLocation = encodeURIComponent(location),
        requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error('Not found city');
    });
  }
}
