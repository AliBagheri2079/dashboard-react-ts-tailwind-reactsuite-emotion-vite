import { ReactElement } from 'react';
import SVG from '../SVG';

export const RightOnRectangle = (): ReactElement => {
  return (
    <SVG
      name="path"
      className=""
      width={30}
      height={30}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      fill="none"
      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
    />
  );
};
