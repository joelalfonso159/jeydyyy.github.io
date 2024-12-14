import React from 'react';
import { TulipConfig } from '../../types';
import { TulipPetals } from './TulipPetals';
import { TulipStem } from './TulipStem';
import '../../styles/Tulip.css';

export const Tulip: React.FC<TulipConfig> = ({ 
  color, 
  delay, 
  position, 
  size = 1, 
  rotationRange = 5 
}) => {
  return (
    <div 
      className="tulip"
      style={{
        '--delay': `${delay}s`,
        '--x': `${position.x}px`,
        '--y': `${position.y}px`,
        '--size': size,
        '--rotation-range': `${rotationRange}deg`,
      } as React.CSSProperties}
    >
      <TulipStem />
      <TulipPetals color={color} />
    </div>
  );
};