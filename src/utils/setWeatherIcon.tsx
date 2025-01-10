import {
  CloudFog,
  CloudLightning,
  CloudMoon,
  CloudRain,
  CloudSnow,
  CloudSun,
  Cloudy,
  Moon,
  Sun,
} from "lucide-react";

interface WeatherProps {
  weatherCode?: number;
  isDay?: number;
}

const SetWeatherIcon = ({ weatherCode, isDay }: WeatherProps) => {
  switch (weatherCode) {
    case 0: {
      return isDay ? (
        <Sun className="w-8 h-8 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16" />
      ) : (
        <Moon className="w-8 h-8 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16" />
      );
    }
    case 1:
    case 2: {
      return isDay ? (
        <CloudSun className="w-8 h-8 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16" />
      ) : (
        <CloudMoon className="w-8 h-8 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16" />
      );
    }
    case 3: {
      return <Cloudy className="w-8 h-8 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16" />;
    }
    case 45:
    case 48: {
      return <CloudFog className="w-8 h-8 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16" />;
    }
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82: {
      return (
        <CloudRain className="w-8 h-8 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16" />
      );
    }
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86: {
      return (
        <CloudSnow className="w-8 h-8 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16" />
      );
    }
    case 95:
    case 96:
    case 99: {
      return (
        <CloudLightning className="w-8 h-8 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16" />
      );
    }
  }
};

export default SetWeatherIcon;
