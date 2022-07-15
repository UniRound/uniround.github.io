import Head from 'next/head';
import type { ReactNode } from 'react';

export interface IPrimaryLayout {
  children: ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hi</title>
      </Head>
      <main>{children}</main>
    </>
  );
};
export default PrimaryLayout;
