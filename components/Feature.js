import { storyblokEditable } from '@storyblok/react';
import { Intro } from '../devlink';

const Feature = ({ blok }) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    <img
      className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
      src={blok.image.filename}
      alt="feature"
    />
    <h3 className="mx-auto mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
      {blok.name}
    </h3>
  </div>
);

export default Feature;
