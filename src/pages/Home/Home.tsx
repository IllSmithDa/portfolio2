import './Home.scss';
import Project from './section/Project/Project';
import Contact from './section/Contact/Contact';
import About from './section/About/About';
import NavButton from './section/NavButton/NavButton';
import NavMenu from './section/NavMenu/NavMenu';
import Footer from './section/Footer/Footer';
import { useEffect } from 'react';
import Header from './section/Header/Header';
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

  useEffect(() => {
    const handleScroll = () => {
      const elementsLeft = document.querySelectorAll('.left-on-scroll');
      elementsLeft.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add('left-visible');
          element.classList.remove('not-visible');
        } else {
          element.classList.remove('left-visible');
          element.classList.add('not-visible');
        }
      });
      const elementsRight = document.querySelectorAll('.right-on-scroll');
      elementsRight.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add('right-visible');
          element.classList.remove('not-visible');
        } else {
          element.classList.remove('right-visible');
          element.classList.add('not-visible');
        }
      });
    };
  
    document.addEventListener('scroll', handleScroll);
  
    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []); // Dependency array is empty to ensure the event listener is only added once.

  return (
    <div className="app-container">
      <NavButton />
      <NavMenu />
      <div className='extra-header' />
      <Header />
      <main>
        <About />
        <Project />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}