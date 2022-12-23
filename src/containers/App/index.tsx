import { FC } from 'react';
import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import { Provider } from 'react-redux';

import { theme } from '@/containers/GlobalEmotionStyles/theme';
import GlobalEmotionStyles from '@/containers/GlobalEmotionStyles';
import ManageRouting from '@/routes';
import { store } from '@/store/rematch';

const App: FC = () => {
  return (
    // {/* recoil root wrapper */}
    <RecoilRoot>
      {/* rematch root wrapper */}
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalEmotionStyles />

          <ManageRouting />
        </ThemeProvider>
      </Provider>
    </RecoilRoot>
  );
};

export default App;
