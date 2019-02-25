import React, { Component } from 'react';
import Helper from '../../helpers/helper';
import InputCard from '../../InputCard/InputCard';

class CardBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPrice: this.props.config.price,
      secondPrice: this.props.config.secondPrice,
    }
  }

  _onTodoChange(value) {
    this.setState({ mainPrice: value });
  }

  render() {
    const { detailOne, detailTwo, detailThree } = this.props.config.aside;

    return (
      <section>
        <div className="center-body">
          <div className="body-details">
            <span className={`now-detail ${Helper.class({ 'error-card-data': !detailOne })}`} data="detailOne">{detailOne}</span>
            <span className={Helper.class({ 'error-card-data': !detailTwo })} >{detailTwo}</span>
            <span className={Helper.class({ 'error-card-data': !detailThree })}>{detailThree}</span>
          </div>
          <div className="body-price">
            <span className="symbol-card">$</span>
            <span className={`main-price-input ${Helper.class({ 'error-card-data': !this.state.mainPrice })}`}>
              <InputCard
                type="tel"
                initialValue={this.state.mainPrice}
                value={(val) => { this.setState({ mainPrice: val }) }}
              />
            </span>
          </div>
        </div>
        <div className="body-other-info">
          <span className="other-info-text">antes</span>
          <span className="other-info-value">
            <span className="symbol-other-info">$</span>
            <span className={`price-other-info ${Helper.class({ 'error-card-data': !this.state.secondPrice })}`}>
              <InputCard
                type="tel"
                initialValue={this.state.secondPrice}
                value={(val) => { this.setState({ secondPrice: val }) }}
              />
            </span>
          </span>
        </div>
      </section>
    )
  }
}

export default CardBody;