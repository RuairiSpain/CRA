import React, {PropTypes, Component} from 'react'
import { connect } from 'react-redux'
import { addProduct, removeProduct } from '../reducers'

class ProductTile extends Component {
  static propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    offer: PropTypes.string,
    addProduct: PropTypes.func.isRequired,
    removeProduct: PropTypes.func.isRequired
  }

  render() {
    const {name, price, offer, addProduct, removeProduct} = this.props;
    return (
      <div >
        <div>
          {name} {offer}
        </div>
        <div>
          &pound; {price.toFixed(2)} </div>
        <button onClick={ () => addProduct(name) }>Add</button>
        <button onClick={ () => removeProduct(name)}>Remove</button>
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  state: state.products
})


export default connect(
  mapStateToProps,
  { addProduct, removeProduct }
)(ProductTile)