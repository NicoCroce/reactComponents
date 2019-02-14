import React, { component } from 'react';
import Helper from '../../helpers/helper';

const CardBody = (props) => {
  const { detailOne, detailTwo, detailThree } = props.config.aside;
  const { price, priceTwo } = props.config;
  return (
    <section>
      <div className="center-body">
        <div className="body-details">
          <span className={ `now-detail ${Helper.class({ 'error-card-data': !detailOne })}` } data="detailOne">{ detailOne }</span>
          <span className={ Helper.class({ 'error-card-data': !detailTwo })} >{ detailTwo }</span>
          <span className={ Helper.class({ 'error-card-data': !detailThree })}>{ detailThree }</span>
        </div>
        <div className="body-price">
          <span className="symbol-card">$</span>
          <span className={ Helper.class({ 'error-card-data': !price })}>{ price }</span>
        </div>
      </div>
      <div className="body-other-info">
        <span>antes</span>
        <span className="symbol-other-info">$</span>
        <span className={`price-other-info ${Helper.class({ 'error-card-data': !priceTwo })}`}>{ priceTwo }</span>
      </div>
    </section>
  )
}

export default CardBody;