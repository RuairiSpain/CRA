import React, {PropTypes, Component} from 'react'

export default class ProductTile extends Component {
  static propTypes = {
    addProduct: PropTypes.func,
    name: PropTypes.string,
    price: PropTypes.number,
    offer: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.handleClick = this
      .handleClick
      .bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this
      .props
      .addProduct(e.target.value);
  }

  render() {
    const {name, price, offer} = this.props;
    return (
      <div onClick={this.handleClick}>
        <div>
          {name}
        </div>
        <div>
          &pound; {price}</div>
        <div>Buy {offer}
        </div>
      </div>

    )
  }
}