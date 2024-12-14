import React from 'react';
import '../../styles/Butterflies.css';

export const Butterflies: React.FC = () => {
  return (
    <div className="butterflies-container">
      {[...Array(3)].map((_, i) => (
        <div 
          key={i} 
          className="butterfly"
          style={{ 
            '--delay': `${i * 2}s`,
            '--start-x': `${i * 30}%`
          } as React.CSSProperties}
        >
          <div className="wing left-wing"></div>
          <div className="wing right-wing"></div>
        </div>
      ))}
    </div>
  );
};