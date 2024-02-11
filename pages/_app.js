import '../styles/globals.css';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Feature from '../components/Feature';
import Grid from '../components/Grid';
import Page from '../components/Page';
import Teaser from '../components/Teaser';
import LayoutFooter from '../components/Footer';
import {
  Anfrageformular,
  ContactSection,
  CtaSection,
  HeroHome,
  Impressum,
  Intro,
  PortfolioOverview,
  PortfolioTeaser,
  Portrait,
  PortraitHero,
} from '../devlink';

const components = {
  homehero: HeroHome,
  Intro: Intro,
  portfolioteaser: PortfolioTeaser,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  contactform: Anfrageformular,
  page: Page,
  footer: LayoutFooter,
  contactsection: ContactSection,
  impressumtext: Impressum,
  portfoliooverview: PortfolioOverview,
  ctasection: CtaSection,
  portraithero: PortraitHero,
  portrait: Portrait,
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
