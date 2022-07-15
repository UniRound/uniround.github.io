import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import SidebarLayout from '@/components/layouts/sidebar/SidebarLayout';
import type { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className="w-full bg-colors-primary text-colors-darkgreen">
      <h1>Welcome to NextJs</h1>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout meta={{ title: { default: 'Hello World!' } }}>
      <SidebarLayout />
      <main id="index">{page}</main>
    </PrimaryLayout>
  );
};
