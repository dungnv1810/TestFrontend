import React from 'react';
import { Link } from "react-router-dom";

import "../../Styles/Buttons.css";

const Buttons = (props) => {
  const {title, path} = props;
  return (
    <>
      <button className='button'>
        <Link to={path}>
          {title}
        </Link>
      </button>
    </>
  )
}

export default Buttons
