import React, { useEffect, useState, useRef } from 'react';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: 'view' | 'hover';
}

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 40,
  maxIterations = 10,
  sequential = true,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?',
  className = '',
  encryptedClassName = 'text-cyan-400 opacity-70 font-mono',
  animateOn = 'view'
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let iteration = 0;

    const startScramble = () => {
      setIsScrambling(true);
      iteration = 0;

      interval = setInterval(() => {
        setDisplayText(() => {
          return text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (sequential) {
                if (index < iteration / (maxIterations / text.length)) {
                  return text[index];
                }
              } else {
                if (Math.random() < iteration / maxIterations) {
                  return text[index];
                }
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('');
        });

        iteration += 1;

        if (iteration > maxIterations + (sequential ? text.length * 2 : 0)) {
          clearInterval(interval);
          setDisplayText(text);
          setIsScrambling(false);
        }
      }, speed);
    };

    if (animateOn === 'view') {
      startScramble();
    } else if (animateOn === 'hover' && isHovering) {
      startScramble();
    }

    return () => clearInterval(interval);
  }, [text, speed, maxIterations, sequential, characters, animateOn, isHovering]);

  return (
    <span
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`inline-block ${className} ${isScrambling ? encryptedClassName : ''}`}
    >
      {displayText}
    </span>
  );
};
