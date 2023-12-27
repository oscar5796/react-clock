import { useRef } from "react";
import { SEPARATOR_DIMENTIONS } from "../../constants";
import { useZoomSize } from "../../custom-hooks/useZoomSize";

const ClockSeparator = ({ zoomSize = 1 }: { zoomSize: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { ctx } = useZoomSize(canvasRef, zoomSize, SEPARATOR_DIMENTIONS);

  if (ctx && canvasRef.current) {
    ctx.clearRect(0, 0, 30 * zoomSize, 190 * zoomSize);
    ctx.fillStyle = "red";
    ctx.fillRect(10, 40, 4, 4);
    ctx.fillRect(10, 60, 4, 4);
  }
  return <canvas ref={canvasRef}>Clock separator</canvas>;
};

export default ClockSeparator;
