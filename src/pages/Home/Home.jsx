import React from 'react';
import './Home.css';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Home = () => {
  const [text] = useTypewriter({
      words:['Designer', 'Developer', 'Freelancer'],
      loop: false,

  });
  return (
    <div className='home'>
      <section className="landing d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <p> I'm <span className="tw-text">{text}</span></p>
        </div>
      </section>
  </div>
  )
}

export default Home