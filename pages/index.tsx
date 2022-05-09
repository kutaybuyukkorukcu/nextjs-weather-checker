import { useEffect } from "react";
import { MainContainer } from "../components/Container";
import { Date } from "../components/Date";
import { Error } from "../components/Error";
import { Header } from "../components/Header";
import { Loader } from "../components/Loader";
import { MetricSwitch } from "../components/MetricSwitch";
import { Search } from "../components/Search";
import { TempratureSection } from "../components/TempratureSection";
import { MetricsBox } from "../components/WeatherMetrics";
import { getWeatherData, WeatherDataRequest, WeatherDataResponse } from "../services/getWeatherData";
import styled from "styled-components";
import { useAppContext } from "../context/sharedState";

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: 1200px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 32px 0 rgba(83, 89, 179, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 30px;
  overflow: hidden;

  @media only screen and (max-width: 950px) {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin: 20px auto;
  }

  @media only screen and (max-width: 600px) {
    margin: 0;
    border-radius: 0;
  }
`

export default function Home() {

  const context = useAppContext();

  useEffect(() => {
    getWeatherData({ city: context.city } as WeatherDataRequest)
    .then((response: WeatherDataResponse) => {
      context.setData(response);
      context.setCity('');
    })
  }, [context.city]);

  const onChangeUnitSystem = () => {
    context.unitSystem == "metric"
      ? context.setUnitSystem("imperial")
      : context.setUnitSystem("metric");
  }

  return context.data && !context.data.infos.message ? (
    <HomeContainer>
      <TempratureSection />
      <MainContainer>
        <Header>
          <Date />
          <Search
            placeholder="Search a city"
            value={context.data.infos.city}
          />
        </Header>
        <MetricsBox />
        <MetricSwitch onClick={onChangeUnitSystem} />
      </MainContainer>
    </HomeContainer>
  ) : context.data && context.data.infos.message ? (
    <Error errorMessage={'City not found'}>
      <Search placeholder="Search a city" value={''} />
    </Error>
  ) : (
    <Loader message={'Loading data...'} />
  )
}
