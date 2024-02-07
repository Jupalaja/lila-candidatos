import React, { useState, useEffect } from 'react';
import { useSharedStates } from '@/contexts';
import { BtnContainer, QuestionBoxHeading, QuestionBoxPara } from '../index';

export function Intro() {
  const { handleOkClick } = useSharedStates();
  const [videoKey, setVideoKey] = useState(Date.now()); // Used to reload the iframe

  // This function is called when you want to stop the video
  const stopVideo = () => {
    setVideoKey(Date.now());
  };

  // Autoplay the video after 5 seconds if the component is still mounted
  useEffect(() => {
    const timer = setTimeout(() => {
      const iframe = document.getElementById(
        'youtube-video-iframe'
      ) as HTMLIFrameElement | null;
      if (iframe) {
        iframe.src += '?autoplay=1&mute=1&rel=0&showinfo=0';
      }
    }, 3000);

    // Event listener for stopping the video when scrolling
    const stopVideoOnScroll = () => stopVideo();

    window.addEventListener('scroll', stopVideoOnScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', stopVideoOnScroll);
    };
  }, []);

  return (
    <>
      <QuestionBoxHeading>¡Hola!</QuestionBoxHeading>
      <QuestionBoxPara>
        Llena el siguiente formulario para que podamos ponernos en contacto
        contigo
        <br />
        <br />
      </QuestionBoxPara>
      <div className="video-container">
        <iframe
          id="youtube-video-iframe"
          key={videoKey}
          width="100%"
          height="350"
          src="https://www.youtube.com/embed/4oTTu-SMl1s"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
          allowFullScreen
        ></iframe>
      </div>

      <BtnContainer
        showPressEnter={true}
        onClick={() => {
          handleOkClick();
          stopVideo();
        }}
      >
        Comenzar
      </BtnContainer>
    </>
  );
}
