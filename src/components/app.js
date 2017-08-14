import React, { Component } from 'react';
import SearchBar from '../container/searchBar';
import CityForcast from '../container/cityWeather';

export default class App extends Component {
  render() {
    return (
      <div className='col-md-12 col-xs-12 col-sm-12'>
        <SearchBar />
        <CityForcast />
      </div>
    );
  }
}
