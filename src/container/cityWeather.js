import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_maps';

class CityWeather extends Component{
    renderCity(cityData){
        const name = cityData.city.name;
        const temp = cityData.list.map(weather=>weather.main.temp);
        const pressure = cityData.list.map(weather=>weather.main.pressure);
        const humidities = cityData.list.map(weather=>weather.main.humidity);
        const {lon, lat} = cityData.city.coord

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temp} color='orange' unit='C'/></td>
                <td><Chart data={pressure} color='blue' unit='hPa'/></td>
                <td><Chart data={humidities} color='yello' unit='%'/></td>
            </tr>
        );
    }
    render(){
        return (
            <div>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temprature (C)</th>
                            <th>Pressure  (hPa)</th>
                            <th>Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderCity)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps({weather}){
    return{weather}
}
export default connect(mapStateToProps)(CityWeather);