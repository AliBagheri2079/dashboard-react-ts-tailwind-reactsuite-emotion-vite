import { FC } from 'react';
import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import { Provider as JotaiProvider } from 'jotai';

import { theme } from '@/containers/GlobalEmotionStyles/theme';
import GlobalEmotionStyles from '@/containers/GlobalEmotionStyles';
import ManageRouting from '@/routes';

const App: FC = () => {
  return (
    // {/* recoil root wrapper */}
    <RecoilRoot>
      {/* jotai root wrapper */}
      <JotaiProvider>
        <ThemeProvider theme={theme}>
          <GlobalEmotionStyles />

          <ManageRouting />
        </ThemeProvider>
      </JotaiProvider>
    </RecoilRoot>
  );
};

export default App;
