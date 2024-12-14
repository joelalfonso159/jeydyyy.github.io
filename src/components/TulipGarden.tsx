import React from 'react';
import { Tulip } from './tulip/Tulip';
import { Heart } from './Heart';
import { Message } from './Message';
import { Butterflies } from './decorations/Butterflies';
import { Clouds } from './decorations/Clouds';
import { tulipConfigs } from '../config/theme';
import '../styles/TulipGarden.css';

export const TulipGarden: React.FC = () => {
  return (
    <div className="garden">
      <Clouds />
      <Message />
      <div className="tulips-container">
        {tulipConfigs.map((config, index) => (
          <Tulip key={index} {...config} />
        ))}
      </div>
      <Butterflies />
      <Heart />
    </div>
  );
};