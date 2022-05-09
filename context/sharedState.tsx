import { createContext, useState, useEffect, useContext } from "react";
import { UnitSystem } from "../components/TempratureSection";
import { getWeatherData, WeatherDataResponse } from "../services/getWeatherData";

export type SharedStateType = {
    data: WeatherDataResponse;
    unitSystem: UnitSystem;
    city: string;
    setUnitSystem: (unitSystem: UnitSystem) => void;
    setCity: (city: string) => void;
    setData: (data: WeatherDataResponse) => void;
}

export const SharedState = createContext<SharedStateType>(null);

type ProviderProps = {
    children: React.ReactNode;
}

export const SharedStateProvider = ({ children }: ProviderProps) => {

    const [city, setCity] = useState<string | null>('Istanbul');
    const [unitSystem, setUnitSystem] = useState<UnitSystem>("metric");
    const [data, setData] = useState<WeatherDataResponse>(null);

    useEffect(() => {
        getWeatherData({ city })
            .then(response => {
                setData(response);
                setCity('');
            })
    }, [city]);

    const values = {
        data,
        unitSystem,
        city,
        setUnitSystem,
        setCity,
        setData
    }

    return (
        <SharedState.Provider value={values}>
            { children }
        </SharedState.Provider>
    )
}

export function useAppContext() {
    return useContext(SharedState);
}

export default SharedState;