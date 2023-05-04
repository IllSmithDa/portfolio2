import { useDispatch } from "react-redux";
import { toggleMenuState } from "../../../../reducers/menuSlice";
import "./NavMenu.scss"

export default function NavMenu() {
  const dispatch = useDispatch();

  /*
  useEffect(() => {
    document.getElementById("nav-menu")?.addEventListener("click", (event: Event) => {
      console.log((event.currentTarget as HTMLElement).id);
    })
  }, [])
  */
  return (
    <section id="nav-menu" className="nav-menu menu-init-state" /*onClick={() => { dispatch(toggleMenuState()); }} */>
      <div id="nav-button-group" className="menu-display-none">
        <h1>Links</h1>
        <div onClick={() => { dispatch(toggleMenuState()); }}>
          <a className="btn-nav-link" href="#">Home &rarr;</a>
        </div>
        <div onClick={() => { dispatch(toggleMenuState()); }}>
          <a className="btn-nav-link" href="#tech-stack">My Tech Stack &rarr;</a>
        </div >
        <div onClick={() => { dispatch(toggleMenuState()); }}>
          <a className="btn-nav-link" href="#projects">My Projects &rarr;</a>
        </div>
        <div onClick={() => { dispatch(toggleMenuState()); }}>
          <a className="btn-nav-link" href="#contact">Contact Info &rarr;</a>
        </div>
        <div
          id="github-profile"
        >
          <a className="btn-nav-link" href="https://github.com/IllSmithDa" target="_blank"  rel="noopener noreferrer" >Github Profile &rarr;</a>
        </div>
        <div
          id="linkedin-profile"
        >
          <a className="btn-nav-link" href="https://www.linkedin.com/in/samuel-kim-1336ab112/" target="_blank"  rel="noopener noreferrer">LinkedIn Profile &rarr;</a>
        </div>
      </div>
    </section>
  )
}