import { ReactElement } from 'react';
import SVG from '../SVG';

export const Arrow = (): ReactElement => {
  return (
    <SVG
      name="path"
      className="flex-shrink-0 h-6 w-6 fill-gray-600 dark:fill-gray-400"
      width={16}
      height={16}
      fill="currentColor"
      viewBox="0 0 16 16"
      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
    />
  );
};
