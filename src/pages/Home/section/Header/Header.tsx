import "./Header.scss";
export default function Header() {
  return (
    <header className="header">
      {
      <img
        className='bg-img'
        src={('/src/assets/images/forest_bridge_com.webp')}
        loading='lazy'
      />
  }
      <h1>Samuel Kim</h1>
      <h3 className="u-margin-bottom-large">Full Stack Developer From SF Ca</h3>
      <a href="#tech-stack" className="left-on-scroll btn btn--white">Learn More</a>
      {
        <div className='bg-gradient'></div>
      }
    </header>
  );
}