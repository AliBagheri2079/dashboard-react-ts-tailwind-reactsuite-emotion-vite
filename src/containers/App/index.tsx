import { FC } from 'react';
import { ThemeProvider } from '@emotion/react';

import { theme } from '@/containers/GlobalEmotionStyles/theme';
import GlobalEmotionStyles from '@/containers/GlobalEmotionStyles';

const App: FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalEmotionStyles />
      </ThemeProvider>
    </>
  );
};

export default App;
