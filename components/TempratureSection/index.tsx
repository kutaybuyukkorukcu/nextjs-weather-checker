import styled from 'styled-components'
import Image from "next/image";
import { celcioustoFahrenheit } from '../../helpers';
import { useAppContext } from '../../context/sharedState';

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

export const TempratureSection = () => {

    const context = useAppContext();

    return (
        <ComponentContainer>
            <Position>
                {context.data.infos.city}, {context.data.infos.country}
            </Position>
            <Description>{context.data.infos.description}</Description>
            <Image
                width="300px"
                height="300px"
                src={`/icons/${context.data.infos.iconName}.svg`}
                alt="weatherIcon"
            />
            <Temprature>
                {context.unitSystem == "metric"
                    ? Math.round(context.data.temprature.real)
                    : Math.round(celcioustoFahrenheit(context.data.temprature.real))
                }
                °{context.unitSystem == "metric" ? "C" : "F"}
            </Temprature>
            <FeelsLikeTemprature>
                Feels like{" "}
                {context.unitSystem == "metric"
                    ? Math.round(context.data.temprature.feelsLike)
                    : Math.round(celcioustoFahrenheit(context.data.temprature.feelsLike))
                }
                °{context.unitSystem == "metric" ? "C" : "F"}
            </FeelsLikeTemprature>
        </ComponentContainer>
    );
};