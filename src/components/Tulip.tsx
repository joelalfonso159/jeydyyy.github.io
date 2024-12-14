import React from 'react';
import '../styles/Tulip.css';

interface TulipProps {
  color: string;
  delay: number;
  position: { x: number; y: number };
}

export const Tulip: React.FC<TulipProps> = ({ color, delay, position }) => {
  return (
    <div 
      className="tulip"
      style={{
        '--delay': `${delay}s`,
        '--x': `${position.x}px`,
        '--y': `${position.y}px`,
        '--color': color,
      } as React.CSSProperties}
    >
      <div className="stem"></div>
      <div className="leaf left-leaf"></div>
      <div className="leaf right-leaf"></div>
      <div className="petals">
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
      </div>
    </div>
  );
};