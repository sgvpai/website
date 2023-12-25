import React, { memo, CSSProperties } from 'react';

interface Polygon2IconProps {
  className?: string;
}

const Polygon2Icon = ({  }: Polygon2IconProps) => {
  const handleButtonClick = () => {
    // Scroll horizontally by 9000 pixels and vertically by the specified target position
    window.scrollBy({
      top: 1000,
      left: 100,
      behavior: "smooth",
    });
  };

  return (
    <svg
    preserveAspectRatio='none'
    viewBox='0 0 82 74'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    onClick={handleButtonClick}
  >
    <path
      d='M64.9788 28.1315C72.4456 32.022 76.1791 33.9672 76.1791 37C76.1791 40.0328 72.4456 41.978 64.9788 45.8685L35.1207 61.4252C28.5828 64.8316 25.3138 66.5348 22.9069 65.0749C20.5 63.6149 20.5 59.9289 20.5 52.5568V21.4432C20.5 14.0711 20.5 10.3851 22.9069 8.92512C25.3138 7.46517 28.5828 9.16837 35.1207 12.5748L64.9788 28.1315Z'
      fill='url(#paint0_linear_104_9)'
    />
    <defs>
      <linearGradient id='paint0_linear_104_9' x1={82} y1={37} x2={0} y2={37} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#585367' />
        <stop offset={1} stopColor='#F4EBE3' />
      </linearGradient>
    </defs>
  </svg>
  );
};

const Memo = memo(Polygon2Icon);
export { Memo as Polygon2Icon };

// Similarly update other components (Polygon3Icon, Polygon4Icon) with the same changes.
