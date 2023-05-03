import { useDispatch } from "react-redux";
import { toggleMenuState } from "../../../../reducers/menuSlice";
import "./NavMenu.scss"

export default function NavMenu() {
  const dispatch = useDispatch();
  return (
    <section id="nav-menu" className="nav-menu menu-init-state" onClick={() => { dispatch(toggleMenuState()); }}>
      <div id="nav-button-group" className="menu-display-none">
        <h1>Links</h1>
        <div>
          <a className="btn-nav-link" href="#">Home &rarr;</a>
        </div>
        <div>
          <a className="btn-nav-link" href="#tech-stack">My Tech Stack &rarr;</a>
        </div>
        <div>
          <a className="btn-nav-link" href="#projects">My Projects &rarr;</a>
        </div>
        <div>
          <a className="btn-nav-link" href="#contact">Contact Info &rarr;</a>
        </div>
        <div>
          <a className="btn-nav-link" href="https://github.com/IllSmithDa" target="_blank">Github Profile &rarr;</a>
        </div>
        <div>
          <a className="btn-nav-link" href="https://www.linkedin.com/in/samuel-kim-1336ab112/" target="_blank">LinkedIn Profile &rarr;</a>
        </div>
        <div>
          <a className="btn-nav-link" href="https://www.theologianspen.com" target="_blank">Theologians's Pen &rarr;</a>
        </div>
        <div>
          <a className="btn-nav-link" href="https://www.gokloak.com" target="_blank">Gokloak &rarr;</a>
        </div>
      </div>
    </section>
  )
}