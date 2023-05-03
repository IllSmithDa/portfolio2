import {  useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toggleMenuState } from '../../../../reducers/menuSlice';
import "./NavButton.scss";

interface NavMenuState {
  navMenu: {
    menuStateOn: boolean,
    initState: boolean,
  }
}

export default function NavButton() {
  const initState = useSelector((state: NavMenuState) =>  state.navMenu.initState);
  const menuState = useSelector((state: NavMenuState) => state.navMenu.menuStateOn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initState) return;
    if (menuState) {
      const element1 = document.getElementById("line1")?.classList;
      element1?.add("line1")
      element1?.remove("default-line");
      const element2 = document.getElementById("line2")?.classList;
      element2?.add("line2")
      element2?.remove("default-line");
      const element3 = document.getElementById("line3")?.classList;
      element3?.add("line3")
      element3?.remove("default-line");
      const navMenu = document.getElementById("nav-menu")?.classList;
      navMenu?.add("toggle-display-on");
      navMenu?.remove('toggle-display-off');
      const navMenuButtons = document.getElementById("nav-button-group")?.classList;
      navMenuButtons?.add("menu-display-block");
      navMenuButtons?.remove('menu-display-none');

      // https://www.designcise.com/web/tutorial/how-to-select-the-document-root-element-with-javascript
      const root = document.documentElement;
      root.style.overflow = 'hidden';
    } else {
      const element1 = document.getElementById("line1")?.classList;
      element1?.remove("line1")
      element1?.add("default-line");
      const element2 = document.getElementById("line2")?.classList;
      element2?.remove("line2")
      element2?.add("default-line");
      const element3 = document.getElementById("line3")?.classList;
      element3?.remove("line3")
      element3?.add("default-line");
      const navMenu = document.getElementById("nav-menu")?.classList;
      navMenu?.add("toggle-display-off");
      navMenu?.remove('toggle-display-on');
      const navMenuButtons = document.getElementById("nav-button-group")?.classList;
      navMenuButtons?.remove("menu-display-block");
      navMenuButtons?.add('menu-display-none');
      const root = document.documentElement;
      root.style.overflow = 'auto';
    }
  }, [initState, menuState])


  return (
    <section className="nav-container"
      onClick={() => { dispatch(toggleMenuState()); }}
    >
      <div id="hamburger-menu" className="hamburger-menu">
        <hr id="line1" className="default-line" />
        <hr id="line2" className="default-line" />
        <hr id="line3" className="default-line" />
      </div>
    </section>
  )
}