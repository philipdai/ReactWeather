let React = require('react'),
  WeatherForm = require('WeatherForm'),
  WeatherMessage = require('WeatherMessage'),
  openWeatherMap = require('openWeatherMap'),
  Weather = React.createClass({
    getInitialState: function() {
      return {isLoading: false, errorMessage: ''};
    },
    handleSearch: function(location) {
      this.setState({isLoading: true, errorMessage: ''});

      openWeatherMap.getTemp(location).then((temp) => {
        this.setState({location: location, temp: temp, isLoading: false, errorMessage: ''});
      }, (errorMessage) => {
        this.setState({isLoading: false, errorMessage: errorMessage.message});
      });
    },
    render: function() {
      let {errorMessage, isLoading, temp, location} = this.state;
      function renderMessage() {
        if (isLoading) {
          return <h3 className="text-center">Fetching weather...</h3>
        } else if (errorMessage.length === 0) {
          return <WeatherMessage location={location} temp={temp}/>;
        } else {
          return <h3>{errorMessage}</h3>
        }
      }

      return (
        <div>
          <h1 className="text-center">Gett Weather</h1>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
        </div>
      );
    }
  });

module.exports = Weather;
