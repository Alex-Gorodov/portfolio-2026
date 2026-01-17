import { useEffect, useRef, useState } from 'react';

interface VideoTemplateProps {
  src: string;
}

export default function VideoTemplate({ src }: VideoTemplateProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const speed = 2;
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  }, [speed]);
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // return (
  //   <div className="video_frame">
  //     {!isPlaying && (
  //       <button
  //         className="video_button"
  //         onClick={togglePlay}
  //         aria-label="Play video"
  //       >
  //         <span />
  //       </button>
  //     )}

  //     <video
  //       ref={videoRef}
  //       className={`video_template ${!isPlaying ? 'video_template--paused' : ''}`}
  //       autoPlay
  //       loop
  //       muted
  //       playsInline
  //       preload="metadata"
  //       onClick={togglePlay}
  //     >
  //       <source src={src} type="video/mp4" />
  //       Your browser does not support the video tag.
  //     </video>
  //   </div>
  // );

  return (
  <div className="video_frame">
    <div className="video_mask">
      <video
        ref={videoRef}
        className={`video_template ${!isPlaying ? 'video_template--paused' : ''}`}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onClick={togglePlay}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>

    {!isPlaying && (
      <button className="video_button" onClick={togglePlay} aria-label="Play video">
        <span />
      </button>
    )}
  </div>
);
}
