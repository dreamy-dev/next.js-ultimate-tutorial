import { storyblokEditable } from '@storyblok/react';

const Teaser = ({ blok }) => {
  return (
    <div>
      <h2 className="text-2xl mb-10" {...storyblokEditable(blok)}>
        {blok.headline}
      </h2>
      <p className="text-xl mb-10" {...storyblokEditable(blok)}>
        {blok.Textfield}
      </p>
    </div>
  );
};

export default Teaser;
