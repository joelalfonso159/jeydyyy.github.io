import React from 'react';
import { colors } from '../../config/theme';
import '../../styles/Tulip.css';

export const TulipStem: React.FC = () => (
  <>
    <div className="stem" style={{ background: colors.stem }}></div>
    <div className="leaf left-leaf" style={{ background: colors.leaf }}></div>
    <div className="leaf right-leaf" style={{ background: colors.leaf }}></div>
  </>
);