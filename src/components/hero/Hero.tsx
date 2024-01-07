import styles from "./Hero.module.scss";
import video from "@/assets/videos/pexels2.mp4";
import {Viewport} from "@unreal/pan";
import {useEffect, useRef, useState} from "react";

interface viewportInformation {
    width: number,
    height: number
}

export default function Hero() {
    const isVideoMuted = true;
    const areControlsEnabled = false;
    const isAutoplayEnabled = true;
    const shouldVideoLoop = true;
    const myVideoRef = useRef<HTMLVideoElement>(null);
    const [viewportInformation, setViewportInformation] = useState<viewportInformation>({width: 0, height: 0});

    useEffect(() => {
        const viewportInfo = Viewport.getInformation();

        if (viewportInfo) {
            const viewportWidth = viewportInfo.width
            const viewportHeight = viewportInfo.height;
            console.log(viewportWidth, viewportHeight);
            setViewportInformation({width: viewportWidth, height: viewportHeight});
        }

    }, []);

    return (
        <div className={styles.hero}>
            <div className={styles.videoContainer}>
                <video
                    ref={myVideoRef}
                    height={viewportInformation.height}
                    controls={areControlsEnabled}
                    autoPlay={isAutoplayEnabled}
                    loop={shouldVideoLoop}
                    muted={isVideoMuted}
                >
                    <source src={video} type="video/webm"/>
                </video>
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.content}>
                    <h1>Alien Agency, exploring the unknown.</h1>
                </div>
            </div>
        </div>
    )
}