import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import type { NextPageWithLayout } from './page';

const About: NextPageWithLayout = () => {
  return (
    <section>
      <h1>About page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
        recusandae laboriosam necessitatibus praesentium quas aliquam, tempore
        animi odit dignissimos accusantium molestiae, officia itaque ipsa iste
        esse labore nulla alias eius?
      </p>
    </section>
  );
};

export default About;

About.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
