let React = require('react'),
    WeatherMessage = ({temp, location}) => {
      if (temp) {
        return (
          <h3 className="text-center">It's {temp} degrees in {location}</h3>
        );
      }

      return (
        <h3 className="text-center">Please input the city name you want to query.</h3>
      );

    };

module.exports = WeatherMessage;
