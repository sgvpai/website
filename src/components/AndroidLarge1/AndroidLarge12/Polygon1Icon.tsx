import React, { memo, SVGProps } from 'react';

interface Polygon1IconProps extends SVGProps<SVGSVGElement> {
  targetPosition: number;
}

const Polygon1Icon = ({ targetPosition, ...props }: Polygon1IconProps) => {
  const handleButtonClick = () => {
    // Scroll down by the specified number of pixels
    window.scrollBy({
      top: 800,
      left: 100,
      behavior: "smooth",
    });
  };

  return (
    <svg
      preserveAspectRatio='none'
      viewBox='0 0 62 65'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      onClick={handleButtonClick}
      style={{ cursor: 'pointer' }}
    >
      <path
        d='M44.4788 23.1745C51.9456 27.0649 55.6791 29.0101 55.6791 32.0429C55.6791 35.0758 51.9456 37.021 44.4788 40.9114L14.6207 56.4682C8.08276 59.8746 4.8138 61.5778 2.4069 60.1178C0 58.6579 0 54.9718 0 47.5997V16.4861C0 9.11405 0 5.42801 2.4069 3.96806C4.8138 2.5081 8.08276 4.21131 14.6207 7.61771L44.4788 23.1745Z'
        fill='url(#paint0_linear_104_6)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_104_6'
          x1={63}
          y1={32.8245}
          x2={-19}
          y2={32.8245}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#4682A9' />
          <stop offset={1} stopColor='#4650A9' />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Memo = memo(Polygon1Icon);
export { Memo as Polygon1Icon };
