import { memo, MouseEvent, MouseEventHandler, SVGProps } from 'react';

const Polygon3Icon = (props: SVGProps<SVGSVGElement> & { onClick?: MouseEventHandler<SVGSVGElement> }) => {
  const handleClick: MouseEventHandler<SVGSVGElement> = (event: MouseEvent<SVGSVGElement>) => {
    // Perform your custom click handling
    // ...

    // Scroll behavior
    window.scrollBy({ top: 39000, left: 100, behavior: "smooth" });

    // Call the original onClick if provided
    if (props.onClick) {
      props.onClick(event);
    }
  };

  const iconStyle: React.CSSProperties = {
    cursor: 'pointer',
    transform: 'scaleX(1)', // Flip horizontally
  };

  return (
    <svg
      preserveAspectRatio='none'
      viewBox='0 0 84 76'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      onClick={handleClick}
      style={iconStyle}
    >
      <path
        d='M17.6874 46.8098C10.1646 43.0285 6.40328 41.1379 6.35912 38.1054C6.31495 35.0729 10.0197 33.0735 17.4291 29.0748L47.0575 13.0849C53.5451 9.5836 56.7889 7.83298 59.2168 9.25772C61.6447 10.6825 61.6984 14.3681 61.8057 21.7395L62.2588 52.8497C62.3662 60.221 62.4198 63.9067 60.0345 65.4015C57.6491 66.8964 54.3557 65.241 47.7688 61.9301L17.6874 46.8098Z'
        fill='url(#paint0_linear_104_7)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_104_7'
          x1={0.538793}
          y1={38.1901}
          x2={82.5301}
          y2={36.9961}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#4682A9' />
          <stop offset={1} stopColor='#4650A9' />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Memo = memo(Polygon3Icon);
export { Memo as Polygon3Icon };
