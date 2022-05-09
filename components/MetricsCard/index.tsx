import Image, { StaticImageData } from "next/image";
import styled from 'styled-components'

const ComponentContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 0.75rem;
  text-align: right;
  border-radius: 0.75rem;
`

const CardContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 475px) {
    grid-template-columns: 1fr 2fr;
  }
`
 
export const MetricsCard = ({ title, icon, metric, unit }: { title: string; icon: StaticImageData; metric: string; unit?: string; }) => {
  return (
    <ComponentContainer>
      <p>{title}</p>
      <CardContent>
        <Image width="100px" height="100px" src={icon} alt="weatherIcon" />
        <div>
          <h1>{metric}</h1>
          { unit && <p>{unit}</p> }
        </div>
      </CardContent>
    </ComponentContainer>
  );
};
