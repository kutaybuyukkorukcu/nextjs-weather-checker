import styled from 'styled-components';
import { getAMPM, getTime, getWeekDay } from '../../helpers';
import { UnitSystem } from "../TempratureSection";

const ComponentContainer = styled.div`
    display: flex;
    align-items: center;
`

export const Date = ({ weatherData, unitSystem }: { weatherData: any; unitSystem: UnitSystem }) => {
  return (
    <ComponentContainer>
      <h2>
        {`${getWeekDay(weatherData)}, ${getTime(
          unitSystem,
          weatherData.dt,
          weatherData.timezone
        )} ${getAMPM(unitSystem, weatherData.dt, weatherData.timezone)}`}
      </h2>
    </ComponentContainer>
  );
};
