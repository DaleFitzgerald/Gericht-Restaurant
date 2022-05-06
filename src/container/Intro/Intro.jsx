import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { SubHeading } from '../../components'
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {

  const vidRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);

  const handleVideo = () => {
    setPlayVideo((prev) => !prev)

    if(playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <div className="app__video">
    <video 
    src={ meal } 
    ref={vidRef}
    type="video/mp4" 
    loop 
    controls={false} 
    muted
    />

    <div className={playVideo ? "app__video-overlay flex__center hide-bg" : "app__video-overlay flex__center"}>
      <div className="app__video-overlay_circle flex__center"
      onClick={handleVideo}>
        {playVideo ? <BsPauseFill color="#FFF" fontSize={30} /> : <BsFillPlayFill color="#FFF" fontSize={30} />}
      </div>
    </div>
  </div>
  )
}

export default Intro;
