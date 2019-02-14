import React, { component } from 'react';
import Helper from '../../helpers/helper';

const CardHeader = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <h2 className={Helper.class({ 'error-card-data': !props.description })} data="description">{ props.description }</h2>
    </header>
  )
}

export default CardHeader;