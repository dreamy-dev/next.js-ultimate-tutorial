import { storyblokEditable } from '@storyblok/react';

const Footer = ({ blok }) => {
  return (
    <h2
      className="text-2xl mb-10 text-emerald-400"
      {...storyblokEditable(blok)}
    >
      {blok.CopyrightText}
    </h2>
  );
};

export default Footer;
