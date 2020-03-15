import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as legoData from "./legoloading.json"
import './Loading.css'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: legoData.default,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
}

export default class Loading extends React.Component {
    render() {
        return (
            <div>
                <FadeIn>
                    <div className="loading">
                        <h1>Fetching posts</h1>
                        <Lottie options={defaultOptions} height={120} width={120} />
                    </div>
                </FadeIn>
            </div>
        );
    }
}