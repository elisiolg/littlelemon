import { NavLink } from "react-router-dom";
import { useState } from "react";
import { mainMenuItems } from '../constants.js'

const Nav = ({isMobile, rawOutput}) => {
  const [state, setState] = useState(false)

  const setMobileNavState = () => setState(!state)
  let uniqueKeyPrefix = 'a-';
  if(rawOutput) {
    uniqueKeyPrefix = 'c-';
  } else if(isMobile) {
    uniqueKeyPrefix = 'b-';
  }

  const menuItemsHtml = mainMenuItems.map((element, index) => {
    const key = uniqueKeyPrefix + index
    return (
      element.url.includes("#") ?
        <a href={`/${element.url}`} key={key}>
          {element.label}
        </a>
      :
        <NavLink key={key} to={`/${element.url}`}>{element.label}</NavLink>
    )
  });

  if (rawOutput) {
    return menuItemsHtml;
  }

  if (isMobile) {
    return (
      <nav className="App-Mobile-Nav">
        <button
          className={state ? "menuToggle open" : "menuToggle"}
          onClick={setMobileNavState}
          aria-expanded={state}
        >
          <span></span>
          <span></span>
          <span></span>
          <ul className="mobile-menu" role="menu">
              {menuItemsHtml}
          </ul>
      </button>
    </nav>
    )
  }
  return (
        <nav className="App-Nav">
            <div className="menu-links" role="menu">
              {menuItemsHtml}
            </div>
        </nav>
    )
  };
export default Nav;
