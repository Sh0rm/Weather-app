import api from "@/config/api";
import { Weather } from "@/types/weatherTypes";

export const getWeather = async (
  latitude: string,
  longitude: string
): Promise<Weather> => {
  const response = await api.get(
    `${process.env.NEXT_PUBLIC_WEATHER_APP_PATH}/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&forecast_days=1`
  );
  return response.data;
};
