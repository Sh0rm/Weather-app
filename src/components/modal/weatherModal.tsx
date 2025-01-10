import { CloudSun } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState } from "react";
// import MapComponent from "./map";
import Chart from "./chart";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./map"), { ssr: false });

interface WeatherModalProps {
  hourlyTemperature?: number[];
  latitude: string;
  longitude: string;
  profilePhoto: string;
}

const WeatherModal = ({
  hourlyTemperature,
  latitude,
  longitude,
  profilePhoto,
}: WeatherModalProps) => {
  const [isChart, setIsChart] = useState(true);
  const [isMap, setIsMap] = useState(false);
  const [isTable, setIsTable] = useState(false);

  return (
    <Dialog>
      <DialogTrigger title="See detailed weather">
        <CloudSun className="w-14 h-14 lg:w-20 lg:h-20" />
      </DialogTrigger>
      <DialogContent className="flex flex-col items-center max-w-[90%] w-[600px] rounded-md">
        <DialogHeader className="flex flex-col items-center">
          <DialogTitle>Daily Weather</DialogTitle>
          <DialogDescription>See weather for tooday (by GMT)</DialogDescription>
        </DialogHeader>
        <div className="flex justify-center gap-20">
          <button
            className={
              isChart
                ? "hidden"
                : "rounded-lg bg-card-main p-2 max-w-[40%] hover:bg-card-secondary duration-300"
            }
            onClick={() => {
              setIsChart(true);
              setIsMap(false);
              setIsTable(false);
            }}
          >
            Show Chart
          </button>
          <button
            className={
              isMap
                ? "hidden"
                : "rounded-lg bg-card-main p-2 max-w-[40%] hover:bg-card-secondary duration-300"
            }
            onClick={() => {
              setIsChart(false);
              setIsMap(true);
              setIsTable(false);
            }}
          >
            Show Map
          </button>
          <button
            className={
              isTable
                ? "hidden"
                : "rounded-lg bg-card-main p-2 max-w-[40%] hover:bg-card-secondary duration-300"
            }
            onClick={() => {
              setIsChart(false);
              setIsMap(false);
              setIsTable(true);
            }}
          >
            Show Table
          </button>
        </div>

        {isChart ? (
          <Chart hourlyTemperature={hourlyTemperature} />
        ) : isMap ? (
          <DynamicMap
            latitude={latitude}
            longitude={longitude}
            profilePhoto={profilePhoto}
          />
        ) : (
          <div className="h-[400px] w-full grid grid-cols-2 justify-between text-center">
            {hourlyTemperature?.map((temperature: number, index: number) => (
              <p key={index}>
                <span className="font-bold">{index}:00</span>: {temperature} °C
              </p>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WeatherModal;
