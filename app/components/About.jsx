let React = require('react'),
    {a} = require('react-router'),
    About = () => {
      return (
        <div>
          <h1 className="text-center">About</h1>
          <p>This is a weather application built on ReactJs and Foundation</p>
          <p>Github:
            <a href="https://github.com/philipdai/ReactWeather">
              https://github.com/philipdai/ReactWeather
            </a>
          </p>
          <p>
            Here are some of the tools I used:
          </p>
          <ul>
            <li>
              <a href="https://facebook.github.io/react">ReactJs</a> - This is the JavaScript framework used.
            </li>
            <li>
              <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
            </li>
            <li>
              <a href="http://foundation.zurb.com/">Foundation</a> - Foundation is a very advanced responsive front-end framework.
            </li>
          </ul>
        </div>
      );
    };

module.exports = About;
