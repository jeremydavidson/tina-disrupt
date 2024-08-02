/* eslint-disable no-unused-vars */
import { GetStaticProps } from 'next';

function HomePage() {
  // This component won't be used for rendering
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      filename: "home"
    }
  };
};

export default HomePage;
