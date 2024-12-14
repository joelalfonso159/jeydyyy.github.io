import React from 'react';
import '../../styles/Clouds.css';

export const Clouds: React.FC = () => {
  return (
    <div className="clouds-container">
      {[...Array(4)].map((_, i) => (
        <div 
          key={i} 
          className="cloud"
          style={{ 
            '--delay': `${i * 10}s`,
            '--top': `${i * 15}%`
          } as React.CSSProperties}
        ></div>
      ))}
    </div>
  );
};