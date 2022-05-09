export interface WeatherDataRequest {
    city: string;
}

export interface Metrics {
    humidity: any;
    windSpeed: any;
    windDirection: any;
    visibility: any;
    sunrise: any;
    sunset: any;
}

export interface Temprature {
    real: any;
    feelsLike: any;
}

export interface Time {
    dt: any;
    timezone: any;
    currentTime: any;
}

export interface Infos {
    city: string;
    country: string;
    description: string;
    iconName: string;
    message: string;
}

export interface WeatherDataResponse {
    infos: Infos;
    time: Time;
    metrics: Metrics;
    temprature: Temprature;
}

export async function getWeatherData(weatherDataRequest: WeatherDataRequest): Promise<WeatherDataResponse> {

    const res = await fetch("api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(weatherDataRequest),
    });

    const data = await res.json();

    return {
        infos: {
            city: data.name,
            country: data.sys.country,
            description: data.weather[0].description,
            iconName: data.weather[0].icon,
            message: data.message
        },
        time: {
            dt: data.dt,
            timezone: data.timezone,
            currentTime: data.sys.sunset
        },
        temprature: {
            real: data.main.temp,
            feelsLike: data.main.feels_like
        },
        metrics: {
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            windDirection: data.wind.deg,
            visibility: data.visibility,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
        }
    };
}