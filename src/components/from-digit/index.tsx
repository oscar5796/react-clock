import { Digit } from "../../types";
import Display from "../display";

const numbers = {
  0: {
    a: true,
    b: true,
    c: true,
    d: true,
    e: true,
    f: true,
    g: false,
  },
  1: {
    a: false,
    b: true,
    c: true,
    d: false,
    e: false,
    f: false,
    g: false,
  },
  2: {
    a: true,
    b: true,
    c: false,
    d: true,
    e: true,
    f: false,
    g: true,
  },
  3: {
    a: true,
    b: true,
    c: true,
    d: true,
    e: false,
    f: false,
    g: true,
  },
  4: {
    a: false,
    b: true,
    c: true,
    d: false,
    e: false,
    f: true,
    g: true,
  },
  5: {
    a: true,
    b: false,
    c: true,
    d: true,
    e: false,
    f: true,
    g: true,
  },
  6: {
    a: true,
    b: false,
    c: true,
    d: true,
    e: true,
    f: true,
    g: true,
  },
  7: {
    a: true,
    b: true,
    c: true,
    d: false,
    e: false,
    f: false,
    g: false,
  },
  8: {
    a: true,
    b: true,
    c: true,
    d: true,
    e: true,
    f: true,
    g: true,
  },
  9: {
    a: true,
    b: true,
    c: true,
    d: true,
    e: false,
    f: true,
    g: true,
  },
};

const FromDigit = ({ digit, zoomSize = 1 }: { digit: Digit; zoomSize?: number }) => {
  const displayLEDS = numbers[digit];

  return <Display {...displayLEDS} zoomSize={zoomSize} />;
};

export default FromDigit;
