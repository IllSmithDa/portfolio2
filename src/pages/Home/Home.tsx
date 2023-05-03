import './Home.scss';
import Project from './section/Project/Project';
import Contact from './section/Contact/Contact';
import About from './section/About/About';
import NavButton from './section/NavButton/NavButton';
import NavMenu from './section/NavMenu/NavMenu';
import Footer from './section/Footer/Footer';
import { useEffect } from 'react';
import Header from './section/Header/Header';
import Particles from '../../components/Particles/Particles';

function isElementInViewport(el: Element) {
  const rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

export default function Home() {

  /*
  const leftObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("left-visible");
      entry.target.classList.toggle("not-visible");
    });
  });
  const rightObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("left-visible");
      entry.target.classList.toggle("not-visible");
    });
  });
  */
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const elementsLeft = document.querySelectorAll('.left-on-scroll');
      elementsLeft.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add('left-visible');
          element.classList.remove("not-visible")
        } else {
          element.classList.remove('left-visible');
          element.classList.add("not-visible")
        }
      });
      const elementsRight = document.querySelectorAll('.right-on-scroll');
      elementsRight.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add('right-visible');
          element.classList.remove("not-visible")
        } else {
          element.classList.remove('right-visible');
          element.classList.add("not-visible")
        }
      });
    })
  });

  return (
    <div className="app-container">
      <NavButton />
      <NavMenu />
      <Particles />
      <div className='extra-header' />
      <Header />
      <Particles />
      <main>
        <About />
        <Project />
        <Particles />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}