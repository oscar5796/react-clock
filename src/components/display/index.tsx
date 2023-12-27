import { useRef } from "react";
import { DISPLAY_DIMENTIONS } from "../../constants";
import { useZoomSize } from "../../custom-hooks/useZoomSize";

// The inputs are named with letters
type DisplayInput = {
  a?: boolean;
  b?: boolean;
  c?: boolean;
  d?: boolean;
  e?: boolean;
  f?: boolean;
  g?: boolean;
  zoomSize?: number;
};

const Display = ({
  a = true,
  b = true,
  c = true,
  d = true,
  e = true,
  f = true,
  g = true,
  zoomSize = 1,
}: DisplayInput) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { ctx } = useZoomSize(canvasRef, zoomSize, DISPLAY_DIMENTIONS);

  if (ctx && canvasRef.current) {
    ctx.clearRect(0, 0, 80 * zoomSize, 190 * zoomSize);
    ctx.fillStyle = "red";

    a && ctx.fillRect(16, 12, 31, 4);
    b && ctx.fillRect(47, 16, 4, 31);
    c && ctx.fillRect(47, 51, 4, 31);
    d && ctx.fillRect(16, 82, 31, 4);
    e && ctx.fillRect(12, 51, 4, 31);
    f && ctx.fillRect(12, 16, 4, 31);
    g && ctx.fillRect(16, 47, 31, 4);
  }

  return <canvas ref={canvasRef}>Number display</canvas>;
};

export default Display;
