"use client";

import { useRef, useState } from "react";

import { motion, Variants } from "framer-motion";

import { useMediaQuery } from "@/utils/hooks";

import { CVideoProgress, IVideoProgressRef } from "./CVideoProgress";
import { ICVideoPlayerProps } from "./types";

const variants: Variants = {};

const childrenVariants: Variants = {
  initial: {
    y: 300,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, type: "spring" },
  },
};

export const CVideoPlayer: React.FC<ICVideoPlayerProps> = ({ src }) => {
  //#region Ref
  const videoRef = useRef<null | HTMLVideoElement>(null);
  const progressRef = useRef<null | IVideoProgressRef>(null);
  //#endregion

  //#region Data
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const { currentWidth } = useMediaQuery();
  //#endregion

  //#region Event
  const togglePlayOrPause = () => {
    if (isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
    } else {
      videoRef.current?.play();
      setIsPlaying(true);
    }
  };

  const onTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    progressRef.current?.timeUpdate(e.currentTarget.currentTime);
  };

  const onForward = () => {
    if (videoRef.current?.currentTime) videoRef.current.currentTime += 15;
  };

  const onBackward = () => {
    if (videoRef.current?.currentTime) videoRef.current.currentTime -= 15;
  };

  const onDrag = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current?.currentTime) {
      progressRef.current?.timeUpdate(Number(e.target.value));
      videoRef.current.currentTime = Number(e.target.value);
    }
  };

  const onPictureInPicture = () => videoRef.current?.requestPictureInPicture();

  const onGoFullscreen = () => videoRef.current?.requestFullscreen();
  //#endregion

  //#region Render
  return (
    <div className="aspect-video max-w-4xl m-auto relative">
      <video
        ref={videoRef}
        preload="metadata"
        controls={currentWidth < 1024 ? true : false}
        onTimeUpdate={onTimeUpdate}
      >
        <source src={`${src}#t=1`} />
      </video>
      <motion.div
        variants={variants}
        initial="initial"
        whileHover="animate"
        className="control-wrapper hidden lg:block absolute inset-0 mx-4 my-3 overflow-hidden"
      >
        <motion.div
          variants={childrenVariants}
          className="control-area absolute bottom-0 w-full p-10px rounded-10px hover:bg-neutral-400 hover:bg-opacity-30"
        >
          <CVideoProgress
            ref={progressRef}
            onDrag={onDrag}
            duration={videoRef.current?.duration || 0}
          />
          <div className="flex items-center justify-between gap-10 w-full">
            <div className="basis-1/3" />

            <div className="basis-1/3 flex items-center justify-center gap-3">
              <button onClick={onBackward} className="scale-75">
                <img src="/icons/backward.png" alt="" />
              </button>
              <button onClick={togglePlayOrPause}>
                {isPlaying ? (
                  <img src="/icons/pause.png" alt="" />
                ) : (
                  <img src="/icons/play.png" alt="" />
                )}
              </button>
              <button onClick={onForward} className="scale-75">
                <img src="/icons/forward.png" alt="" />
              </button>
            </div>

            <div className="basis-1/3 flex items-center justify-end gap-3">
              <button onClick={onPictureInPicture} className="scale-75">
                <img src="/icons/minimize.png" alt="" />
              </button>
              <button onClick={onGoFullscreen} className="scale-75">
                <img src="/icons/fullscreen.png" alt="" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
  //#endregion
};
