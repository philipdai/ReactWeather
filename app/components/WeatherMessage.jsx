let React = require('react'),
    WeatherMessage = ({temp, location}) => {
      return (
        <h3>It's {temp} degrees in {location}</h3>
      );
    };

module.exports = WeatherMessage;
