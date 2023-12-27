
export const useZoomSize = (canvasRef: React.RefObject<HTMLCanvasElement>, zoomSize: number, canvasDimentions: { WIDTH: number, HEIGHT: number }) => {
  const ctx = canvasRef.current?.getContext('2d')

  if (ctx && canvasRef.current) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    canvasRef.current.width = canvasDimentions.WIDTH * zoomSize;
    canvasRef.current.height = canvasDimentions.HEIGHT * zoomSize;
    ctx.scale(zoomSize, zoomSize);
  }
  return { ctx }
}