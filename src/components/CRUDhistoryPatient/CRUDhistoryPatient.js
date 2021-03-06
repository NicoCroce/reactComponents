import React, { Component } from 'react';
import Helper from '../helpers/helper';

import './crud-history-patient.scss';

import historyResponse from './estructuraHistoria';

class CRUDhistoryPatient extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        const { name } = this.props.patient;
        const { socialWork, afiliateNumber, age, address, city, date, professional, details, agudezaVisual, agudezaVisualCerca, presion } = historyResponse();

        const { dateDay, dateYear, literalMont, hour, minutes } = Helper.literalDate(date);

        return (
            <div id="CRUDhistoryPatient">
                <header>
                    <h1 className="patient-name">{name}</h1>
                    <section className="year-block">
                        <h2 className="year-number">{dateYear}</h2>
                        <div className="appointments">
                            <h3 className="description-header">{dateDay} de {literalMont} <span className="hour">{hour}: {minutes} hs - {city} - </span><span className="professional-name">{professional}</span> </h3>
                            {/* <h3 className="patient-age">Eddad del paciente 24 años y 3 meses</h3> */}
                            <div className="patient-details">
                                <ul>
                                    <li><span>Edad</span> <span>{age}</span></li>
                                    <li><span>Obra Social</span> <span>{socialWork}</span></li>
                                    <li><span>N* Afiliado</span> <span>{afiliateNumber}</span></li>
                                    <li><span>Domicilio</span> <span>{address}</span></li>
                                </ul>
                            </div>
                            <div className="history-detail">
                                {Object.keys(details).map(label => (
                                    <div className="description-block" hidden={!Helper.isValue(details[label])}>
                                        <h2>{label}</h2>
                                        <p>{details[label]}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="block-flex">
                                <div className="block-table">
                                    <table className="has-aside">
                                        <caption>Agudeza Visual</caption>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                {Object.keys(agudezaVisual.od).map(label => (
                                                    <th>{label}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>OD</td>
                                                {Object.keys(agudezaVisual.od).map(data => (
                                                    <td>{agudezaVisual.od[data]}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>OI</td>
                                                {Object.keys(agudezaVisual.oi).map(data => (
                                                    <td>{agudezaVisual.oi[data]}</td>
                                                ))}
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th colspan="1">Cerca</th>
                                                <td colspan="5">{ agudezaVisualCerca }</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="block-table">
                                    <table>
                                        <caption>Presión</caption>
                                        <thead>
                                            <tr>
                                                {Object.keys(presion).map(label => (
                                                    <th>{label}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                {Object.keys(presion).map(data => (
                                                    <td>{presion[data]}</td>
                                                ))}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="files-appoitments">
                                <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="" />
                                <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="" />
                                <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="" />
                                <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="" />
                                <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="" />
                            </div>
                        </div>
                    </section>
                </header>
            </div>
        );
    }

}

export default CRUDhistoryPatient;