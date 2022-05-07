import styled from 'styled-components'
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

  
export const MetricSwitch = ({ onClick, unitSystem }: { onClick: any; unitSystem: UnitSystem }) => {
    // className={`${styles.switch} ${
    //     unitSystem == "metric" ? styles.active : styles.inactive
    //   }`}
  return (
    <ComponentContainer>
      <Switch
        onClick={onClick}
      >
        Metric System
      </Switch>
      <Switch
        onClick={onClick}
      >
        Imperial System
      </Switch>
    </ComponentContainer>
  );
};