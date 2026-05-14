// import { useEffect, useRef, useState } from 'react';

// interface VideoTemplateProps {
//   src: string;
//   poster?: string;
// }

// export default function VideoTemplate({ src, poster }: VideoTemplateProps) {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const [isPlaying, setIsPlaying] = useState(true);

//   const speed = 2;
//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = speed;
//     }
//   }, [speed]);

//   const togglePlay = () => {
//     const video = videoRef.current;
//     if (!video) return;

//     if (video.paused) {
//       video.play();
//       setIsPlaying(true);
//     } else {
//       video.pause();
//       setIsPlaying(false);
//     }
//   };

//   return (
//   <div className="video__frame">
//       <div className="video__mask">
//         {
//         isPlaying
//         ?
//         <video
//           ref={videoRef}
//           className={`video__template ${!isPlaying ? 'video__template--paused' : ''}`}
//           loop
//           muted
//           playsInline
//           preload="metadata"
//           poster={poster}
//           onClick={togglePlay}
//           >
//           <source src={src} type="video/mp4" />
//         </video>
//         :
//         // <button className="video__button" onClick={togglePlay} aria-label="Play video"/>
//         <img
//           src={poster}
//           alt=""
//           className={`video__template ${!isPlaying ? 'video__template--paused' : ''}`}
//           onClick={togglePlay}
//         />
//       }
//       </div>

//   </div>
// );
// }








// import { useEffect, useRef, useState } from 'react';

// interface VideoTemplateProps {
//   src: string;
//   poster?: string;
// }

// export default function VideoTemplate({ src, poster }: VideoTemplateProps) {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const speed = 2;

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = speed;
//     }
//   }, [speed]);

//   const handleToggle = () => {
//     const video = videoRef.current;
//     if (!video) return;

//     if (video.paused) {
//       video.play();
//     } else {
//       video.pause();
//     }
//   };

//   return (
//     <div className="video__frame">
//       <div className="video__mask">
//         {/* POSTER */}
//         {!isPlaying && poster && (
//           <>
//           <button className="video__button video__button--play" aria-label="Play video"/>
//           <img
//             src={poster}
//             alt=""
//             className="video__template video__template--poster"
//             onClick={handleToggle}
//           />
//           </>
//         )}

//         {/* VIDEO (ВСЕГДА В DOM) */}

//         <>
//           <button className="video__button video__button--pause" aria-label="Play video"/>
//           <video
//             ref={videoRef}
//             className="video__template"
//             loop
//             muted
//             playsInline
//             preload="metadata"
//             onClick={handleToggle}
//             onPlay={() => setIsPlaying(true)}
//             onPause={() => setIsPlaying(false)}
//             onEnded={() => setIsPlaying(false)}
//           >
//             <source src={src} type="video/mp4" />
//           </video>
//           </>
//       </div>
//     </div>
//   );
// }





import { useEffect, useRef, useState } from 'react';

interface VideoTemplateProps {
  src: string;
  poster?: string;
}

export default function VideoTemplate({ src, poster }: VideoTemplateProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const speed = 2;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  }, [speed]);

  const handleToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    video.paused ? video.play() : video.pause();
  };

  return (
    <div className="video__frame">
      <div className="video__mask">
        {/* POSTER */}
        {!isPlaying && poster && (
          <img
            src={poster}
            alt=""
            className="video__template video__template--poster"
            onClick={handleToggle}
          />
        )}

        {/* VIDEO */}
        <video
          ref={videoRef}
          className="video__template"
          loop
          muted
          playsInline
          preload="metadata"
          onClick={handleToggle}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        >
          <source src={src} type="video/mp4" />
        </video>

        {/* BUTTON */}
        <button
          className={`video__button ${isPlaying ? 'video__button--pause' : 'video__button--play'}`}
          onClick={handleToggle}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        />
      </div>
    </div>
  );
}
