import IncapacityOfWorkImage from "./Incapacity_of_work.png";
import {useEffect, useRef, useState} from "react";

const useLoadCanvasAndImage = ()=>{
    const canvasRef = useRef();
    const [canvasDimension, setCanvasDimensions] = useState({height:0, width:0});
    const [image, setImage] = useState()

    useEffect(() => {
            if(image && canvasDimension.height && canvasDimension.width){
                const context = canvasRef.current.getContext('2d');
                context.drawImage(image, 0, 0, canvasRef.current.width, canvasRef.current.height)
            }
        }
        , [image, canvasDimension]);



    useEffect(() => {
        const image = new Image();
        image.src = IncapacityOfWorkImage;
        setCanvasDimensions({height:image.height, width:image.width})
        image.onload = () => {
            setImage(image)
            setCanvasDimensions({height:image.height, width:image.width })
        }
    }, [])

    return {canvasRef, canvasDimension}
}

export default useLoadCanvasAndImage