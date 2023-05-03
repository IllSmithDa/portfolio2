import "./Header.scss";
export default function Header() {
  return (
    <header className="header">
      <h1>Samuel Kim</h1>
      <h3>Full Stack Developer from Bay Area Ca</h3>
      <a href="#tech-stack" className="left-on-scroll btn btn--white">My Stack</a>
    </header>
  );
}