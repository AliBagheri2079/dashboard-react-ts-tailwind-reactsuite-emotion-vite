import { FC } from 'react';
import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';

import { theme } from '@/containers/GlobalEmotionStyles/theme';
import GlobalEmotionStyles from '@/containers/GlobalEmotionStyles';
import ManageRouting from '@/routes';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalEmotionStyles />

      {/* Wrap recoil root on components */}
      <RecoilRoot>
        <ManageRouting />
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default App;
