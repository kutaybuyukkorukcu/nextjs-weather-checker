import type { NextApiRequest, NextApiResponse } from 'next';
import { WeatherDataRequest } from '../../services/getWeatherData';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const requestBody: WeatherDataRequest = req.body;

    const data = await fetch(
        `${process.env.API_ROUTE}?q=${requestBody.city}&units=metric&appid=${process.env.API_KEY}`
    );
    
    return res.status(200).json(
        await data.json()
    );
}