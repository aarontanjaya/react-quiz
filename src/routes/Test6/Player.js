import { useEffect, useRef, useState } from "react";
import { cssContainer, cssVideo } from "./style";

const Player = () => {
  const [paused, setPaused] = useState(true);
  const [muted, setMuted] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const vidRef = useRef(0);
  const handleTogglePlay = (paused) => {
    if (paused) {
      vidRef.current.play();
      return;
    }
    vidRef.current.pause();
  };

  const handleToggleMute = () => {
    setMuted(!muted);
  };

  const formatTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = Math.ceil(s % 60);
    return `${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`;
  };

  useEffect(() => {
    if (vidRef) {
      setPaused(vidRef.current.paused);
      vidRef.current.muted = muted;
    }
  }, [vidRef.current.paused, muted]);

  return (
    <div className={cssContainer}>
      <video
        onPause={() => {
          setPaused(true);
        }}
        onPlay={() => {
          setPaused(false);
        }}
        onTimeUpdate={() => {
          setTime(vidRef.current.currentTime);
        }}
        onLoadedMetadata={() => {
          setDuration(vidRef.current.duration);
        }}
        ref={vidRef}
        className={cssVideo}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
      <button
        onClick={() => handleTogglePlay(vidRef.current.paused)}
        type="button"
      >
        {paused ? "Play" : "Pause"}
      </button>
      <button onClick={() => handleToggleMute()} type="button">
        {muted ? "Unmute" : "Mute"}
      </button>
      <input
        value={vidRef.current.currentTime}
        onInput={(e) => {
          vidRef.current.currentTime = e.target.value;
          setTime(vidRef.current.currentTime)
        }}
        max={vidRef.current.duration}
        min={0}
        type="range"
      />
      <span>{`${formatTime(time)}/${formatTime(duration)}`}</span>
    </div>
  );
};

export default Player;
