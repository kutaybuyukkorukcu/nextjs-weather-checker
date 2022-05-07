import { degreeToCompass, getAMPM, getTime, getVisibility, getWindSpeed } from "../../helpers";
import { MetricsCard } from "../MetricsCard/index";
import { UnitSystem } from "../TempratureSection";
import PlaceholderIcon from "../../public/icons/placeholder.png";
import styled from 'styled-components'

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

export const MetricsBox = ({ weatherData, unitSystem }: { weatherData: any; unitSystem: UnitSystem }) => {
  return (
    <ComponentContainer>
      <MetricsCard
        title={"Humidity"}
        icon={PlaceholderIcon}
        metric={weatherData.main.humidity}
        unit={"%"}
      />
      <MetricsCard
        title={"Wind speed"}
        icon={PlaceholderIcon}
        metric={getWindSpeed(unitSystem, weatherData.wind.speed)}
        unit={unitSystem == "metric" ? "m/s" : "m/h"}
      />
      <MetricsCard
        title={"Wind direction"}
        icon={PlaceholderIcon}
        metric={degreeToCompass(weatherData.wind.deg)}
      />
      <MetricsCard
        title={"Visibility"}
        icon={PlaceholderIcon}
        metric={getVisibility(unitSystem, weatherData.visibility)}
        unit={unitSystem == "metric" ? "km" : "miles"}
      />
      <MetricsCard
        title={"Sunrise"}
        icon={PlaceholderIcon}
        metric={getTime(
          unitSystem,
          weatherData.sys.sunrise,
          weatherData.timezone
        )}
        unit={getAMPM(
          unitSystem,
          weatherData.sys.sunrise,
          weatherData.timezone
        )}
      />
      <MetricsCard
        title={"Sunset"}
        icon={PlaceholderIcon}
        metric={getTime(
          unitSystem,
          weatherData.sys.sunset,
          weatherData.timezone
        )}
        unit={getAMPM(unitSystem, weatherData.sys.sunset, weatherData.timezone)}
      />
    </ComponentContainer>
  );
};
