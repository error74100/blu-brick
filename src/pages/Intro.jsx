import React, { useEffect } from 'react';
import '../components/Intro.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Intro() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      <section className="intro_wrap">
        <div className="left_box"></div>
        <div className="right_box">
          <p className="tit" data-aos="fade-left">
            BRAND STORY
          </p>
          <p className="subtit" data-aos="fade-left">
            BLUE BRICK
            <br />
            MY COFFEE
          </p>
          <p className="desc" data-aos="fade-up">
            A dev server that provides rich
            <br />
            feature enhancements over native ES modules.
          </p>
          <p className="desc" data-aos="fade-up">
            Vite is opinionated and comes with sensible defaults out of the box.
            Read about what's possible in the Features Guide. Support for
            frameworks or integration with other tools is possible through
            Plugins.
          </p>
          <p className="desc" data-aos="fade-up">
            You can learn more about the rationale.
          </p>
        </div>
      </section>

      <section className="intro_wrap type2">
        <div className="left_box"></div>
        <div className="right_box">
          <p className="tit" data-aos="fade-right">
            22 BRAND STORY
          </p>
          <p className="subtit" data-aos="fade-right">
            BLUE BRICK
            <br />
            MY COFFEE
          </p>
          <p className="desc" data-aos="fade-up">
            A dev server that provides rich
            <br />
            feature enhancements over native ES modules.
          </p>
          <p className="desc" data-aos="fade-up">
            Vite is opinionated and comes with sensible defaults out of the box.
            Read about what's possible in the Features Guide. Support for
            frameworks or integration with other tools is possible through
            Plugins.
          </p>
          <p className="desc" data-aos="fade-up">
            You can learn more about the rationale.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Intro;
