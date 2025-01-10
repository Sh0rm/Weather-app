"use client";

import { getWeather } from "@/services/getWeather";
import { Weather } from "@/types/weatherTypes";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import toast from "react-hot-toast";

type GetWeather = {
  weatherData?: Weather;
  isWeatherLoading: boolean;
  isWeatherError: boolean;
};

const useGetWeather = (latitude: string, longitude: string): GetWeather => {
  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    isError: isWeatherError,
    error: weatherError,
  } = useQuery({
    queryKey: ["get-weather", latitude, longitude],
    queryFn: () => getWeather(latitude, longitude),
    refetchInterval: 300000,
  });

  useEffect(() => {
    if (!isWeatherError) return;
    toast.error(weatherError);
  }, [isWeatherError, weatherError]);

  return {
    weatherData,
    isWeatherLoading,
    isWeatherError,
  };
};

export default useGetWeather;
