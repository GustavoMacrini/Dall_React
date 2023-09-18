import ReactPlayer from 'react-player';
import './videoPlayer.css';
import { useState, useEffect } from 'react';

function VideoPlayer() {
  const config = {
    youtube: {
      playerVars: {
        controls: 0,
        modestbranding: 1,
        showinfo: 0,
      },
    },
  };

  const [widthPlayer, setWidthPlayer] = useState('400px');
  const [heightPlayer, setHeightPlayer] = useState('220px');

  const atualizaTamanho = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 464) { // MOBILE
      setWidthPlayer('400px');
      setHeightPlayer('220px');
    } else if (windowWidth <= 1024) { // TABLET
      setWidthPlayer('600px');
      setHeightPlayer('330px');
    } else { // DESKTOP
      setWidthPlayer('885px');
      setHeightPlayer('490px');
    }
  };

  useEffect(() => {
    // Registra o ouvinte de evento para redimensionamento da janela
    window.addEventListener('resize', atualizaTamanho);

    // Calcula o tamanho inicial ao carregar a tela
    atualizaTamanho();

    // Remove o ouvinte de evento quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', atualizaTamanho);
    };
  }, []);

  return (
    <ReactPlayer
      url='https://www.youtube.com/watch?v=WQKzFRAtj10'
      playing={true}
      loop={true}
      volume={0}
      config={config}
      width={widthPlayer}
      height={heightPlayer}
    />
  );
}

export default VideoPlayer;
