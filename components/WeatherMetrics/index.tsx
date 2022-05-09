import { degreeToCompass, getAMPM, getTime, getVisibility, getWindSpeed } from "../../helpers";
import { MetricsCard } from "../MetricsCard/index";
import PlaceholderIcon from "../../public/icons/placeholder.png";
import styled from 'styled-components'
import { useAppContext } from "../../context/sharedState";

const ComponentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;

    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: 475px) {
        grid-template-columns: 1fr;
    }
`

export const MetricsBox = () => {
  
  const context = useAppContext();

  return (
    <ComponentContainer>
      <MetricsCard
        title={"Humidity"}
        icon={PlaceholderIcon}
        metric={context.data.metrics.humidity}
        unit={"%"}
      />
      <MetricsCard
        title={"Wind speed"}
        icon={PlaceholderIcon}
        metric={getWindSpeed(context.unitSystem, context.data.metrics.windSpeed)}
        unit={context.unitSystem == "metric" ? "m/s" : "m/h"}
      />
      <MetricsCard
        title={"Wind direction"}
        icon={PlaceholderIcon}
        metric={degreeToCompass(context.data.metrics.windDirection)}
      />
      <MetricsCard
        title={"Visibility"}
        icon={PlaceholderIcon}
        metric={getVisibility(context.unitSystem, context.data.metrics.visibility)}
        unit={context.unitSystem == "metric" ? "km" : "miles"}
      />
      <MetricsCard
        title={"Sunrise"}
        icon={PlaceholderIcon}
        metric={getTime(
          context.unitSystem,
          context.data.metrics.sunrise,
          context.data.time.timezone
        )}
        unit={getAMPM(
          context.unitSystem,
          context.data.metrics.sunrise,
          context.data.time.timezone
        )}
      />
      <MetricsCard
        title={"Sunset"}
        icon={PlaceholderIcon}
        metric={getTime(
          context.unitSystem,
          context.data.metrics.sunset,
          context.data.time.timezone
        )}
        unit={getAMPM(context.unitSystem, context.data.metrics.sunset, context.data.time.timezone)}
      />
    </ComponentContainer>
  );
};
