import '../styles/globals.css';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Feature from '../components/Feature';
import Grid from '../components/Grid';
import Page from '../components/Page';
import Teaser from '../components/Teaser';
import LayoutFooter from '../components/Footer';
import { Intro } from '../devlink';

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  Footer: LayoutFooter,
};

storyblokInit({
  accessToken: 'y8uLGmvU4FTrKNwCwF4LQAtt',
  use: [apiPlugin],
  components,
  apiOptions: {
    region: '',
  },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
