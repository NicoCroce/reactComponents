import React, { component } from 'react';

const CardFooter = (props) => {
  const { date, sap, origin } = props.config;

  const validateDate = () => !date || !date.day || !date.month || !date.year;

  return (
    <footer>
      <div className="details-columns-footer">
        <span hidden={ validateDate() } >{ date.day } / { date.month } / { date.year }</span>
        <span>SAP: { sap }</span>
        <span>origen: { origin }</span>
      </div>
      <div className="banner-price">
        <img src="" alt="" />
        <p>el mejor precio <span>asegurado</span></p>
      </div>
    </footer>
  )
}

export default CardFooter;