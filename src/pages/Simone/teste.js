import useSound from 'use-sound';
import React from 'react';

import boopSfx from '../../../public/docs/music.mp3';

const BoopButton = () => {
  const [play] = useSound(boopSfx);

  return <button onClick={play}>Boop!</button>;
};

export default BoopButton;