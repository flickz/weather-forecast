import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const KEY = '13991abf0a6b74e3f2c87461c0bf3c1b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${KEY}`

export function fetchWeather (city){
    const url = `${ROOT_URL}&q=${city},ng&units=metric`;
    const request = axios.get(url);
    console.log(url) 
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}