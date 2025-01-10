import useGetWeather from "@/hooks/useGetWeather";
import { User } from "@/types/userTypes";
import SetWeatherIcon from "@/utils/setWeatherIcon";
import {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "@/utils/localStorage";
import {
  Save,
  ThermometerSnowflake,
  ThermometerSun,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import WeatherModal from "./modal/weatherModal";
import { useUserStore } from "@/store/userStore";

interface CardProps {
  userData: User;
}

const Card = ({ userData }: CardProps) => {
  const { email, gender, name, picture, location, saved, login } = userData;
  const { latitude, longitude } = location.coordinates;
  const { weatherData } = useGetWeather(latitude, longitude);
  const { deleteRandomUser, addSavedUser, deleteSavedUser } = useUserStore();
  const [isSaved, setIsSaved] = useState(saved);

  const saveUser = () => {
    addUserToLocalStorage(userData);
    addSavedUser(userData);
    deleteRandomUser(userData.login.uuid);
    setIsSaved(true);
  };

  const removeUser = () => {
    removeUserFromLocalStorage(login.uuid);
    deleteSavedUser(userData.login.uuid);
    setIsSaved(false);
  };

  return (
    <div className="flex flex-col gap-5 justify-between border-2 border-black rounded-md p-5 bg-card-main w-90 h-160 relative lg:w-3/4 lg:flex-row lg:justify-center">
      <div className="flex flex-col items-center gap-5 w-full lg:items-start">
        <p className="font-bold text-2xl lg:text-3xl 2xl:text-4xl">
          {name.title} {name.first} {name.last}
        </p>
        <p className="text-xl lg:text-2xl 2xl:text-3xl">Gender: {gender}</p>
        <Image
          width={300}
          height={300}
          src={picture.large}
          alt="User Image"
          priority={true}
        />
        <p className="text-xl lg:text-2xl 2xl:text-3xl">{email}</p>
        <div className="flex flex-col items-left">
          <p className="text-xl lg:text-2xl 2xl:text-3xl">
            Country: {location.country}
          </p>
          <p className="text-xl lg:text-2xl 2xl:text-3xl">
            State: {location.state}
          </p>
          <p className="text-xl lg:text-2xl 2xl:text-3xl">
            City: {location.city}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center w-full  lg:justify-start lg:items-start">
        <span className="flex gap-3 items-end">
          {/* <Trash2 className="w-8 h-8 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16" /> */}
          <SetWeatherIcon
            weatherCode={weatherData?.current_weather.weathercode}
            isDay={weatherData?.current_weather.is_day}
          />
          <p className="hidden text-xl lg:block lg:text-2xl 2xl:text-3xl">
            Current temperature:
          </p>
          <p className="text-xl lg:text-2xl 2xl:text-3xl">
            {weatherData?.current_weather.temperature} °C
          </p>
        </span>
        <span className="flex gap-3 items-end">
          <ThermometerSnowflake className="w-8 h-8 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16" />
          <p className="hidden text-xl lg:block lg:text-2xl 2xl:text-3xl">
            Lowest for day:
          </p>
          <p className="text-xl lg:text-2xl 2xl:text-3xl">
            {weatherData?.daily.temperature_2m_min} °C
          </p>
        </span>
        <span className="flex gap-3 items-end">
          <ThermometerSun className="w-8 h-8 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16" />
          <p className="hidden text-xl lg:block lg:text-2xl 2xl:text-3xl">
            Highest for day:
          </p>
          <p className="text-xl lg:text-2xl 2xl:text-3xl">
            {weatherData?.daily.temperature_2m_max} °C
          </p>
        </span>
      </div>
      <div className="flex justify-between w-full lg:absolute lg:bottom-4 lg:right-4 lg:justify-end">
        <WeatherModal
          hourlyTemperature={weatherData?.hourly.temperature_2m}
          latitude={latitude}
          longitude={longitude}
          profilePhoto={picture.large}
        />
        {isSaved ? (
          <button title="Delete user" onClick={removeUser}>
            <Trash2 className="w-14 h-14 lg:w-20 lg:h-20" />
          </button>
        ) : (
          <button title="Save user" onClick={saveUser}>
            <Save className="w-14 h-14 lg:w-20 lg:h-20" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
