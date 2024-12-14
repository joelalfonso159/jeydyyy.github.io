export interface Position {
  x: number;
  y: number;
}

export interface TulipConfig {
  color: string;
  delay: number;
  position: Position;
  size?: number;
  rotationRange?: number;
}

export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  stem: string;
  leaf: string;
}