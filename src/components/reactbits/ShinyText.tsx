import React from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  shineColor?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 4,
  className = '',
  shineColor = 'rgba(255, 255, 255, 0.9)'
}) => {
  return (
    <span
      className={`shiny-text-root ${className} ${disabled ? 'disabled' : ''}`}
      style={{
        animationDuration: `${speed}s`,
        // @ts-expect-error custom CSS variable for shine color
        '--shine-color': shineColor
      }}
    >
      {text}
    </span>
  );
};
