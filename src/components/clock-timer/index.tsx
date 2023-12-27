import { useEffect, useState } from "react";
import FromDigit from "../from-digit";
import { Digit, Format } from "../../types";
import ClockSeparator from "../clock-separator";

export const CLOCK_FORMAT = {
  '24_HOURS': '24_HOURS', 
  '12_HOURS': '12_HOURS'
} as const; 

const ClockTimer = ({zoomSize = 0.5, format = CLOCK_FORMAT["24_HOURS"]}: {zoomSize?: number, format?: Format }) => {
  const [hoursArray, setHoursArray] = useState<Digit[]>([]);
  const [minutesArray, setMinutesArray] = useState<Digit[]>([]);
  const [secondsArray, setSecondsArray] = useState<Digit[]>([]);

  const toDigitsArray = (digit: number): Digit [] => {
    const arrayDigits = digit.toString().split('').map(Number) as Digit[];
    if (arrayDigits.length < 2) {
      return [0, ...arrayDigits];
    }
    return arrayDigits
  };

  const toTwelveHoursFormat = (hours: number) => {
    if(hours > 12){
      return hours - 12
    }
    return hours
  }

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const date = new Date();
      const twentyFourHoursFormat = date.getHours(); 
      const twelveHoursFormat = toTwelveHoursFormat(twentyFourHoursFormat);
      const hours = toDigitsArray(format === CLOCK_FORMAT['24_HOURS'] ? twentyFourHoursFormat : twelveHoursFormat );
      const minutes = toDigitsArray(date.getMinutes());
      const seconds = toDigitsArray(date.getSeconds());

      setHoursArray(hours);
      setMinutesArray(minutes);
      setSecondsArray(seconds);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  const buildDigitsDisplay = (digits: Digit[]) => {
    return digits.map((digit, index) => <FromDigit digit={digit} key={index} zoomSize={zoomSize}/>)
  }

  return (
    <div className="flex flex-row">
        {buildDigitsDisplay(hoursArray)}
        <ClockSeparator zoomSize={zoomSize}/>
        {buildDigitsDisplay(minutesArray)}
        <ClockSeparator zoomSize={zoomSize}/>
        {buildDigitsDisplay(secondsArray)}
    </div>
  );
};

export default ClockTimer;
