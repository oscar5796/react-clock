import { useRef } from "react"

const ClockSeparator = ({zoomSize = 1}: {zoomSize: number}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null); 
    const ctx = canvasRef.current?.getContext('2d'); 

    if(ctx){
        ctx.scale(zoomSize, zoomSize);
        ctx.fillStyle = 'red'; 
        ctx.fillRect(10, 40, 4, 4); 
        ctx.fillRect(10, 60, 4, 4);
    }
    
    return <canvas width={120} height={400} ref={canvasRef}>Clock separator</canvas>
}

export default ClockSeparator