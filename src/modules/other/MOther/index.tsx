"use client";

import { useRef, useState } from "react";

import { motion, Variants } from "framer-motion";

import { convertNumberToTime } from "@/utils/funcs";

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

export const MOther = () => {
  //#region Ref
  const videoRef = useRef<null | HTMLVideoElement>(null);
  //#endregion

  //#region Data
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
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
    setCurrentTime(e.currentTarget.currentTime);
  };

  const onForward = () => {
    if (videoRef.current?.currentTime) videoRef.current.currentTime += 15;
  };

  const onBackward = () => {
    if (videoRef.current?.currentTime) videoRef.current.currentTime -= 15;
  };

  const onGoFullscreen = () => videoRef.current?.requestFullscreen();

  const onDrag = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current?.currentTime) {
      setCurrentTime(Number(e.target.value));
      videoRef.current.currentTime = Number(e.target.value);
    }
  };

  const onPictureInPicture = () => videoRef.current?.requestPictureInPicture();

  //#endregion

  //#region Render
  return (
    <div className="aspect-video max-w-4xl m-auto mt-20 relative">
      <video ref={videoRef} preload="metadata" onTimeUpdate={onTimeUpdate}>
        <source src="/videos/mobile.mp4#t=1" />
      </video>
      <motion.div
        variants={variants}
        initial="initial"
        whileHover="animate"
        className="control-wrapper absolute inset-0 mx-4 my-3 overflow-hidden"
      >
        <motion.div
          variants={childrenVariants}
          className="control-area absolute bottom-0 w-full p-10px rounded-10px hover:bg-neutral-400 hover:bg-opacity-30"
        >
          <div className="flex items-center justify-center gap-2 pb-1">
            <span className="text-white select-none">
              {convertNumberToTime(currentTime) || "00:00"}
            </span>
            <input
              type="range"
              className="flex-1 accent-[#124874]"
              value={currentTime}
              onChange={onDrag}
              min={0}
              max={videoRef.current?.duration || 0}
              step={
                videoRef.current?.duration
                  ? videoRef.current.duration / 1000000
                  : 0
              }
            />
            <span className="text-white select-none">
              {videoRef.current?.duration
                ? convertNumberToTime(videoRef.current?.duration)
                : "00:00"}
            </span>
          </div>

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
