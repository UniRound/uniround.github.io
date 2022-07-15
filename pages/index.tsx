import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import type { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section>
      <h1>Welcome to NextJs</h1>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
