import { CLOCK_FORMAT } from "./components/clock-timer";

export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type SEP_SYMBOL = 'SEP_SYMBOL';

export type Format = keyof typeof CLOCK_FORMAT;