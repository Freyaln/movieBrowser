import * as React from 'react';
import Typo, { TextType } from '../../atoms/Typo/Typo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <footer className="footer">
      <section className="footer__block__left">
        <ul className="footer__block__left__using">
          <Typo type={TextType.H3} className="footer__black__left__using__title">
            This website was made using :
          </Typo>
          <li>Reactjs</li>
          <li>TMDB</li>
          <li>HeadlessUI</li>
        </ul>
      </section>
      <article className="footer__block__right">
        <button className="footer__block__left__btnContact" onClick={scrollToTop}>
          Return to the top
        </button>
      </article>
    </footer>
  );
};

export default Footer;
