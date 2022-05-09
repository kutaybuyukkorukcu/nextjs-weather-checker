import styled from 'styled-components';
import { useAppContext } from '../../context/sharedState';
import { getAMPM, getTime, getWeekDay } from '../../helpers';

const ComponentContainer = styled.div`
    display: flex;
    align-items: center;
`

export const Date = () => {

  const context = useAppContext();
  
  return (
    <ComponentContainer>
      <h2>
        {`${getWeekDay(context.data.time)}, ${getTime(
          context.unitSystem,
          context.data.time.dt,
          context.data.time.timezone
        )} ${getAMPM(context.unitSystem, context.data.time.dt, context.data.time.timezone)}`}
      </h2>
    </ComponentContainer>
  );
};
