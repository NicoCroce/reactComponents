import React, { component } from 'react';
import InputCard from '../../InputCard/InputCard';

const CardFooter = (props) => {
  let { date, sap, origin } = props.config;

  const validateDate = () => !date || !date.day || !date.month || !date.year;

  return (
    <footer>
      <div className="details-columns-footer">
        <span hidden={validateDate()} >
          <span className="w2ch">
            <InputCard
              type="tel"
              initialValue={date.day}
              value={val => date.day = val}
            />
          </span>

          /

          <span className="w2ch">
            <InputCard
              type="tel"
              initialValue={date.month}
              value={val => date.month = val}
            />
          </span>

          /

          <span className="w4ch">
            <InputCard
              type="tel"
              initialValue={date.year}
              value={val => date.year = val}
            />
          </span>

        </span>


        <span>SAP:
          <span className="sap">
            <InputCard
              type="text"
              initialValue={sap}
              value={(val) => sap = val}
            />
          </span> </span>
        <span>origen: 
          <span>
            <InputCard 
              type="text"
              initialValue={ origin }
              value={ (val) => origin = val }
            />
          </span>
        </span>
      </div>
      <div className="banner-price">
        <img src="" alt="" />
        <p>el mejor precio <span>asegurado</span></p>
      </div>
    </footer>
  )
}

export default CardFooter;