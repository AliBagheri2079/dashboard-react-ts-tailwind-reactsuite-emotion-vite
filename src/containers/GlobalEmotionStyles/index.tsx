import { FC } from 'react';
import { Global } from '@emotion/react';
import { normalizeStyles, resetStyles } from './styled';

const GlobalEmotionStyles: FC = () => {
  return (
    <>
      <Global styles={resetStyles} />
      <Global styles={normalizeStyles} />
    </>
  );
};

export default GlobalEmotionStyles;
