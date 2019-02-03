import React, { Component } from 'react';
import Helper from '../helpers/helper';

import './crud-history-patient.scss';

import historyResponse  from './estructuraHistoria';

class CRUDhistoryPatient extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        const { name } = this.props.patient;
        const { socialWork, afiliateNumber, age, address, city, date, professional, antecedentes, motivo, semiologia, fondoDeOjo, examenesComplementarios, practicas, agudezaVisual, agudezaVisualCerca, biomicroscopia, presion, rp } = historyResponse();

        const { dateDay, dateYear, literalMont, hour, minutes } = Helper.literalDate(date);

        return (
            <div id="CRUDhistoryPatient">
                <header>
                    <h1 className="patient-name">{name}</h1>
                    <section className="year-block">
                        <h2 className="year-number">{ dateYear }</h2>
                        <div className="appointments">
                            <h3 className="description-header">{ dateDay } de { literalMont } <span className="hour">{ hour }: { minutes } hs - { city } - </span><span className="professional-name">{ professional }</span> </h3>
                            {/* <h3 className="patient-age">Eddad del paciente 24 años y 3 meses</h3> */}
                            <div className="patient-details">
                                <ul>
                                    <li><span>Edad</span> <span>{ age }</span></li>
                                    <li><span>Obra Social</span> <span>{ socialWork }</span></li>
                                    <li><span>N* Afiliado</span> <span>{ afiliateNumber }</span></li>
                                    <li><span>Domicilio</span> <span>{ address }</span></li>
                                </ul>
                            </div>
                            <div className="history-detail">
                                <div className="description-block">
                                    <h2>Observaciones:</h2>
                                    <p>{ antecedentes }</p>
                                </div>
                                <div className="description-block">
                                    <h2>Otros detalles:</h2>
                                    <p>Lorem ipsum dolor sit amet  consectetur adipisicing elit. Beatae assumenda perspiciatis doloremque est quis eius dolores esse officiis dolorum minus odio autem nulla tempora quae, modi similique dolor eaque cum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda perspiciatis doloremque est quis eius dolores esse officiis dolorum minus odio autem nulla tempora quae, modi similique dolor eaque cum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda perspiciatis doloremque est quis eius dolores esse officiis dolorum minus odio autem nulla tempora quae, modi similique dolor eaque cum?</p>
                                </div>
                            </div>
                            <div className="files-appoitments">
                                <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt=""/>
                                <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt=""/>
                                <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt=""/>
                                <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt=""/>
                                <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt=""/>
                            </div>
                        </div>
                    </section>
                </header>
            </div>
        );
    }

}

export default CRUDhistoryPatient;