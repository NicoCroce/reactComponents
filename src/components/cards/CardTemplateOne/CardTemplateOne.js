import React, { Component } from 'react';
import CardHeader from '../CardHeader/CardHeader';
import CardBody from '../CardBody/CardBody';
import CardFooter from'../CardFooter/CardFooter';

import Helper from '../../helpers/helper';

import './card-template-one.scss';


class CardTemplateOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  getBodyConfig = () => {
    return {
      aside: {
        detailOne: "",
        detailTwo: "precio",
        detailThree: "contado"
      },
      price: "888.888",
      priceTwo: "8.888"
    }
  }

  getFooterConfig = () => {
    return {
      date: {
        day: "31",
        month: "12",
        year: "2000"
      },
      sap: "Algo Sap",
      origin: "China"
    }
  }


  render() {
    /* const { dateDay, dateYear, literalMont, hour, minutes } = Helper.literalDate(date); */
    return (
      <article id="CardTemplateOne">
        <CardHeader title="Oferta Especial" description="descripción producto"  algo="descripción producto"/>
        <CardBody config={ this.getBodyConfig() }/>
        <CardFooter config={ this.getFooterConfig() }/>

      </article>
    );
  }

}

export default CardTemplateOne;