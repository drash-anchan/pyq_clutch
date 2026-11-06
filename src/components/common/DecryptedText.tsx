import React, { useEffect, useState } from 'react';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  className?: string;
  revealOnMount?: boolean;
}

const CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_#*/';

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 40,
  className = '',
  revealOnMount = true,
}) => {
  const [displayText, setDisplayText] = useState(revealOnMount ? '' : text);

  useEffect(() => {
    if (!revealOnMount) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) return text[index];
            if (char === ' ') return ' ';
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, revealOnMount]);

  return <span className={className}>{displayText}</span>;
};
