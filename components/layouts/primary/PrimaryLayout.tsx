import type { ReactNode } from 'react';
import MetaLayout, { IMetaLayout } from '../meta/MetaLayout';

export interface IPrimaryLayout {
  meta: IMetaLayout;
  children: ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, meta }) => {
  return (
    <>
      <MetaLayout {...meta} />
      <div id="layout">{children}</div>
    </>
  );
};
export default PrimaryLayout;
