import React from 'react';
import { Link, NavLink } from "react-router-dom";

import "../../Styles/Navigator.css"

const NavBar = [
  {
    id: 1,
    path: '/dashboard',
    display: 'Dashboard'
  },
  {
    id: 2,
    path: '/postsManagement',
    display: 'PostsManagement'
  },
  {
    id: 3,
    path: '/settings',
    display: 'Settings'
  },
]

const Navigator = () => {

  return (
    <>
      <ul>
        {
          NavBar.map((item, index) =>{
            return(
              <li key={item.id}>
                <NavLink
                  className={navClass => navClass.isActive ? 'nav__item nav__action' : 'nav__item'}
                  to={item.path}
                >
                  {item.display}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default Navigator
