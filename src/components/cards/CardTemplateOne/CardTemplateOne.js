import React, { Component } from 'react';
import CardHeader from '../CardHeader/CardHeader';

import Helper from '../../helpers/helper';

import './card-template-one.scss';


class CardTemplateOne extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    /* const { dateDay, dateYear, literalMont, hour, minutes } = Helper.literalDate(date); */
    return (
      <article id="CardTemplateOne">
        <CardHeader title="Oferta Especial" description="descripción producto"/>
        <body>
          <div className="center-body">
            <div className="body-details">
              <span className="now-detail">ahora</span>
              <span>precio</span>
              <span>contado</span>
            </div>
            <div className="body-price">
              <span className="symbol-card">$</span>
              <span>XXX.XXX</span>
            </div>
          </div>
          <div className="body-other-info">
            <span>antes</span>
            <span className="symbol-other-info">$</span>
            <span className="price-other-info">X.XXX</span>
          </div>
        </body>
        <footer>
          <div className="details-columns-footer">
            <span>xx/xxx/xxxx</span>
            <span>SAP: <span>xxxxxxx</span></span>
            <span>origen: <span>xxxxxxxx</span></span>
          </div>
          <div className="banner-price">
            <img src="" alt=""/>
            <p>el mejor precio <span>asegurado</span></p>
          </div>
        </footer>

      </article>
    );
  }

}

export default CardTemplateOne;