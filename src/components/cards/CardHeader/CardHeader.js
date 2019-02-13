import React, { component } from 'react';

const CardHeader = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <h2>{ props.description }</h2>
    </header>
  )
}

export default CardHeader;