import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Button, Col, Row} from 'react-bootstrap';

import ProductTile from '../components/ProductTile';
import BasketItem from '../components/BasketItem';
//import {Basket as BasketModel} from '../model/Basket';


class BasketContainer extends Component {

  static propTypes = {
    products: PropTypes.array
  }

  static defaultProps = {
    products: []
  }

  constructor(props) {
    super(props)

    this.handleCheckOut = this.handleCheckOut.bind(this);

  }

  componentDidMount() {
    //this.setState({basket: getData()});
  }

  renderBasket(){
    return this.props.basket ?
      this
      .props
      .basket.map(item => <BasketItem key={'basket-' + item.name} {...item} addProduct={this.handleAddProduct} updateProduct={this.handleUpdateProduct}/>)
      : "<span>Click products to add to basket.</span>";

  }

  renderProductsTiles(productName){
    //create JSX for array of products in inventory
    //const sortedProducts = this.props.products.sort(row => row.name);
    return  this.props.products.map(item => <ProductTile key={'product-' +item.name} {...item} />);
  }

  handleCheckOut(){
  }


  render() {
    //create JSX for basket



    return (
      <Row>
        <Col xs={12} md={6}>
          <h4>Choose a Product</h4>
          {this.renderProductsTiles()}
        </Col>
        <Col xs={12} md={6}>
          <h4>Basket</h4>
          {this.renderBasket()}
        </Col>
        <Col xs={12} md={6}>
          <Button block onClick={this.handleCheckOut()}>Checkout</Button>
        </Col>
      </Row>
    );
  }
}


function mapStateToProps(state) {
  return {
    products : state.products,
    basket: state.basket,
    uniqueCount: state.basket.uniqueCount,
    total:  0, //state.basket.total.toFixed(2),
    length : 0 //state.basket.length
  };
}


export default connect(mapStateToProps)(BasketContainer);