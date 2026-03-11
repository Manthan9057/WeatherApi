import {Request, Response } from 'express';
import { getWeather } from '../services/weatherService';
import { db } from '../config/db';

export const fetchweather = async (req: Request, res: Response) => {
    try {
        const city = req.params.city;
        const data = await getWeather(city);
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const weather = data.weather[0].description;

        await db.execute('INSERT INTO weather (city, temperature, humidity, weather) VALUES (?, ?, ?, ?)', [city, temperature, humidity, weather]);
        res.json({city, temperature, humidity, weather ,});
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch weather data' });
    }
};