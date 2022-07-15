import '../styles/tailwind.css';

import type { AppProps } from 'next/app';
import { ReactNode } from 'react';
import type { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

const UniroundBrochureApp: (_appProps: AppPropsWithLayout) => ReactNode = ({
  Component,
  pageProps,
}) => {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
};
export default UniroundBrochureApp;
