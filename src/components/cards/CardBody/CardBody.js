import React, { Component } from 'react';
import Helper from '../../helpers/helper';


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
            <span className={Helper.class({ 'error-card-data': !this.state.mainPrice })}>
              <input
                type="text"
                value={this.state.mainPrice}
                onChange={e => this._onTodoChange(e.target.value)}
              />
            </span>
          </div>
        </div>
        <div className="body-other-info">
          <span>antes</span>
          <span className="symbol-other-info">$</span>
          <span className={`price-other-info ${Helper.class({ 'error-card-data': !this.state.secondPrice })}`}>{this.state.secondPrice}</span>
        </div>
      </section>
    )
  }
}

export default CardBody;