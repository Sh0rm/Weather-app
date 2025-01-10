export type Weather = {
  current_weather: {
    is_day: number;
    temperature: number;
    weathercode: number;
  };
  daily: {
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
  hourly: {
    temperature_2m: number[];
  };
};
