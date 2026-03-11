import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export const getWeather = async (city: string) => {
    const apiKey = process.env.WEATHER_API_KEY;
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    return response.data;
};