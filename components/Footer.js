/* import { storyblokEditable } from '@storyblok/react';
 */
const Footer = ({ blok }) => {
  return (
    <h2
      className="text-2xl mb-10 text-emerald-400"
      /* {...storyblokEditable(blok)} */
    >
      {/* {blok.CopyrightText} */}
      <p>Copyright © 2024 </p>
    </h2>
  );
};

export default Footer;
