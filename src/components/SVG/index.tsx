import { ReactElement, SVGProps } from 'react';

type ChildSVGProp = {
  name: 'circle' | 'rectangle' | 'path';
  stroke: string;
  strokeWidth: number;
  fill: string;
  d?: string;
};

type ParentSVGProp = ChildSVGProp & {
  id?: string;
  className?: string;
  style?: object;
  width?: number;
  height?: number;
  viewBox: string;
  children?: ReactElement;
};

//* when using `SVGProps` accepts all regular svg property
const getSVG = ({
  name,
  stroke,
  strokeWidth,
  fill,
  d,
}: SVGProps<ChildSVGProp>): ReactElement => {
  switch (name) {
    case 'circle':
      return (
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke={stroke}
          strokeWidth={strokeWidth}
          fill={fill}
        />
      );

    case 'rectangle':
      return (
        <rect
          width="200"
          height="100"
          stroke={stroke}
          strokeWidth={strokeWidth}
          fill={fill}
        />
      );

    default:
      return <path strokeLinecap="round" strokeLinejoin="round" d={d} />;
  }
};

const SVG = ({
  name,
  id = '',
  className = ' ',
  style = {},
  width = 20,
  height = 20,
  viewBox,
  stroke,
  strokeWidth,
  fill = 'none',
  d,
  children,
}: ParentSVGProp): ReactElement => (
  <svg
    id={id}
    className={className}
    style={style}
    width={width}
    height={height}
    viewBox={viewBox}
    stroke={stroke}
    strokeWidth={strokeWidth}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getSVG({ name, stroke, strokeWidth, fill, d })}
    {children}
  </svg>
);
export default SVG;
