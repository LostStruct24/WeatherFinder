import React, { Component } from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/Weather';
import { Helmet } from 'react-helmet';

const API_KEY = 'type your API key here';

class App extends Component {

  state = {
      temp: undefined,
      city: undefined,
      country: undefined,
      error: undefined
  }

  gettingWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;

      if(city) {
          const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      
          const data = await api_url.json();
          
          this.setState({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            error: undefined
          });
      } else {
          this.setState({
            temp: undefined,
            city: undefined,
            country: undefined,
            error: "Type the name of the city"        
          });
      }
  }

  render () {
      return (
          <div className="wrapper">
              <div className="main">
              <div className="container">
                  <div className="row">
                <Helmet>
                    <title>Weather Finder</title>
                </Helmet> 
                      <div>
                          <Info />
                      </div>
                      <div>
                          <Form getWeather={this.gettingWeather} />
                          <Weather 
                              temp={this.state.temp}
                              city={this.state.city}
                              country={this.state.country}
                              error={this.state.error}
                          />
                      </div>
                  </div>
              </div>
          </div>
          </div>
      );
  } 
}

export default App;