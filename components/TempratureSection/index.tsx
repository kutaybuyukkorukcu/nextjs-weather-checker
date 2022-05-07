import styled from 'styled-components'
import Image from "next/image";
import { celcioustoFahrenheit } from '../../helpers';

const ComponentContainer = styled.div`
    text-align: center;
    padding: 30px;
`

const Position = styled.h1`
    font-size: 2.25rem;
    margin-bottom: 0.75rem;
`

const Description = styled.p`
    font-size: 2.25rem;
    margin-bottom: 0.75rem;
`

const Temprature = styled.h1`
    font-size: 3.5rem;
`

const FeelsLikeTemprature = styled.p`
    font-size: 1rem;
`

export type UnitSystem = "metric" | "imperial";

export const TempratureSection = ({
    city,
    country,
    description,
    iconName,
    unitSystem,
    weatherData,
}: {
    city: string;
    country: string;
    description: string;
    iconName: string;
    unitSystem: UnitSystem;
    weatherData: any;
}) => {
    return (
        <ComponentContainer>
            <Position>
                {city}, {country}
            </Position>
            <Description>{description}</Description>
            <Image
                width="300px"
                height="300px"
                src={`/icons/${iconName}.svg`}
                alt="weatherIcon"
            />
            <Temprature>
                {unitSystem == "metric"
                    ? Math.round(weatherData.main.temp)
                    : Math.round(celcioustoFahrenheit(weatherData.main.temp))
                }
                °{unitSystem == "metric" ? "C" : "F"}
            </Temprature>
            <FeelsLikeTemprature>
                Feels like{" "}
                {unitSystem == "metric"
                    ? Math.round(weatherData.main.feels_like)
                    : Math.round(celcioustoFahrenheit(weatherData.main.feels_like))
                }
                °{unitSystem == "metric" ? "C" : "F"}
            </FeelsLikeTemprature>
        </ComponentContainer>
    );
};