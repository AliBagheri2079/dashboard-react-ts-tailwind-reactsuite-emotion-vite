import { FC } from 'react';
import { ThemeProvider } from '@emotion/react';

import { theme } from '@/containers/GlobalEmotionStyles/theme';
import GlobalEmotionStyles from '@/containers/GlobalEmotionStyles';
import ManageRouting from '@/routes';

const App: FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalEmotionStyles />
        <ManageRouting />
      </ThemeProvider>
    </>
  );
};

export default App;
