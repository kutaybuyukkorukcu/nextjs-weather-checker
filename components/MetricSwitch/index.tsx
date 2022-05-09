import styled from 'styled-components'
import { useAppContext } from '../../context/sharedState';
import { UnitSystem } from '../TempratureSection';

const ComponentContainer = styled.div`
    text-align: right;

    @media only screen and (max-width: 475px) {
        text-align: center;
    }

    @media only screen and (max-width: 335px) {
        display: grid;
        grid-template-columns: 1fr;
    }
`

const Switch = styled.p`
    display: inline;
    margin: 0 10px;
    cursor: pointer;
    color: ${props => props.color};

    @media only screen and (max-width: 335px) {
        margin: 10px 0;
    }
`

  
export const MetricSwitch = ({ onClick }: { onClick: any; }) => {

  const context = useAppContext();

  return (
    <ComponentContainer>
      <Switch
        onClick={onClick}
        color={context.unitSystem == "metric" ? 'green' : 'black' }
      >
        Metric System
      </Switch>
      <Switch
        onClick={onClick}
        color={context.unitSystem == "metric" ? 'black' : 'green' }
      >
        Imperial System
      </Switch>
    </ComponentContainer>
  );
};