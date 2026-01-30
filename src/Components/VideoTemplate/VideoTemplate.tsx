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
//   <div className="video_frame">
//       <div className="video_mask">
//         {
//         isPlaying
//         ?
//         <video
//           ref={videoRef}
//           className={`video_template ${!isPlaying ? 'video_template--paused' : ''}`}
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
//         // <button className="video_button" onClick={togglePlay} aria-label="Play video"/>
//         <img
//           src={poster}
//           alt=""
//           className={`video_template ${!isPlaying ? 'video_template--paused' : ''}`}
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
//     <div className="video_frame">
//       <div className="video_mask">
//         {/* POSTER */}
//         {!isPlaying && poster && (
//           <>
//           <button className="video_button video_button--play" aria-label="Play video"/>
//           <img
//             src={poster}
//             alt=""
//             className="video_template video_template--poster"
//             onClick={handleToggle}
//           />
//           </>
//         )}

//         {/* VIDEO (ВСЕГДА В DOM) */}

//         <>
//           <button className="video_button video_button--pause" aria-label="Play video"/>
//           <video
//             ref={videoRef}
//             className="video_template"
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
    <div className="video_frame">
      <div className="video_mask">
        {/* POSTER */}
        {!isPlaying && poster && (
          <img
            src={poster}
            alt=""
            className="video_template video_template--poster"
            onClick={handleToggle}
          />
        )}

        {/* VIDEO */}
        <video
          ref={videoRef}
          className="video_template"
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
          className={`video_button ${isPlaying ? 'video_button--pause' : 'video_button--play'}`}
          onClick={handleToggle}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        />
      </div>
    </div>
  );
}
