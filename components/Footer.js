/* import { storyblokEditable } from '@storyblok/react';
 */
import { Footer } from '../devlink';

const LayoutFooter = ({ blok }) => {
  return (
    <div>
      <Footer props={blok} />
      <h2
        className="text-2xl mb-10 text-emerald-400"
        /* {...storyblokEditable(blok)} */
      >
        {/* {blok.CopyrightText} */}
        <p>Copyright © 2024 </p>
      </h2>
    </div>
  );
};

export default LayoutFooter;
