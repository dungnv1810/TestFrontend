import React from 'react';

import "../../Styles/Title.css";

const Title = (props) => {
  const {title} = props;
  return (
    <>
      <span>{title}</span>
    </>
  )
}

export default Title;
