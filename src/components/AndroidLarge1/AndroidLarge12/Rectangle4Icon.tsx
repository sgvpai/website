import { memo, SVGProps } from 'react';

const Rectangle4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 343 778' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 26C0 11.6406 11.6406 0 26 0H317C331.359 0 343 11.6406 343 26V752C343 766.359 331.359 778 317 778H26C11.6406 778 0 766.359 0 752V26Z'
      fill='url(#paint0_linear_104_8)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_104_8'
        x1={170.5}
        y1={-2.5}
        x2={170.5}
        y2={775.5}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#4650A9' stopOpacity={0} />
        <stop offset={0.145833} stopColor='#8A92CB' stopOpacity={0} />
        <stop offset={0.713542} stopColor='#5C5470' stopOpacity={0.78} />
        <stop offset={1} stopColor='#352F44' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Rectangle4Icon);
export { Memo as Rectangle4Icon };
