import React from 'react';
import '../../styles/Tulip.css';

interface TulipPetalsProps {
  color: string;
}

export const TulipPetals: React.FC<TulipPetalsProps> = ({ color }) => (
  <div className="petals" style={{ '--color': color } as React.CSSProperties}>
    <div className="petal"></div>
    <div className="petal"></div>
    <div className="petal"></div>
    <div className="center-petal"></div>
  </div>
);