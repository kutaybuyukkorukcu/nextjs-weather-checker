
export const celcioustoFahrenheit = (c: number) => (c * 9) / 5 + 32;

export const mpsToMph = (mps: string) => (Number(mps) * 2.236936).toFixed(2);

export const kilometersToMiles = (km: number) => (km / 1.609).toFixed(1);

export const timeTo12HourFormat = (time: string | Date | any) => {
  let [hours, minutes] = time.split(":");
  return `${(hours %= 12) ? hours : 12}:${minutes}`;
};

export const degreeToCompass = (degree: number) => {
  var val = Math.round(degree / 22.5);
  var arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return arr[val % 16];
};

export const unixToLocalTime = (unixSeconds: any, timezone: any): any => {
  let time = new Date((unixSeconds + timezone) * 1000)
    .toISOString()
    .match(/(\d{2}:\d{2})/)[0];

  return time.startsWith("0") ? time.substring(1) : time;
};

export const getWindSpeed = (unitSystem: string, windInMps: string): string =>
  unitSystem == "metric" ? windInMps : mpsToMph(windInMps);

export const getVisibility = (unitSystem: string, visibilityInMeters: number) =>
  unitSystem == "metric"
    ? (visibilityInMeters / 1000).toFixed(1)
    : kilometersToMiles(visibilityInMeters / 1000);

export const getTime = (unitSystem: string, currentTime: any, timezone: any) =>
  unitSystem == "metric"
    ? unixToLocalTime(currentTime, timezone)
    : timeTo12HourFormat(unixToLocalTime(currentTime, timezone));

export const getAMPM = (unitSystem: string, currentTime: any, timezone: any) =>
  unitSystem === "imperial"
    ? unixToLocalTime(currentTime, timezone).split(":")[0] >= 12
      ? "PM"
      : "AM"
    : "";

export const getWeekDay = (weatherData: { dt: any; timezone: any; }) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekday[
    new Date((weatherData.dt + weatherData.timezone) * 1000).getUTCDay()
  ];
};