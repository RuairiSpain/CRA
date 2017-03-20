import React, {PropTypes, Component} from 'react'
import { connect } from 'react-redux'


class BasketItem extends Component {
  static propTypes = {
    addProduct: PropTypes.func,
    name: PropTypes.string,
    quantity: PropTypes.number,
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
    const {name, quantity, price, offer} = this.props;
    return (
      <div onClick={this.handleClick}>
        <div>
          {name} {offer}
        </div>
        <div>{quantity} * &pound;{price.toFixed(2)}</div>
        <div>X </div>
      </div>

    )
  }
}

const lookup = (state, name) => state.products.find( x => x.name = name);

const mapStateToProps = (state, ownProps ) => {
  console.log(state, ownProps.name )
  return {
    price: lookup(state, ownProps.name).price,
    offer: !!lookup(state, ownProps.name).discount ? '*' : ''
}}


export default connect(
  mapStateToProps
)(BasketItem)