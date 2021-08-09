import React from "react";
import Lottie from "react-lottie";
import * as animationData from './preload.json'


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}


const Preloader = () =>{
    return (
        <div>
            <p>Loadinng....</p>
            <Lottie options={defaultOptions} width={100} height={120} />
        </div>
    )
}

export default Preloader;