import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PageHeader, Button, Col, Row, ListGroup} from 'react-bootstrap';

import ProductTileContainer from '../containers/ProductTileContainer';
import BasketItemContainer from '../containers/BasketItemContainer';
//import {Basket as BasketModel} from '../model/Basket';

class BasketContainer extends Component {

  static defaultProps = {
    products: []
  }

  constructor(props) {
    super(props)

    this.handleCheckOut = this
      .handleCheckOut
      .bind(this);

  }

  renderBasket() {
    return !!this.props.basket
      ? this
        .props
        .basket
        .map(item => <ListGroup><BasketItemContainer key={'basket-' + item.name} {...item}/>
        </ListGroup>)
      : "<span>Click products to add to basket.</span>";

  }

  renderProductsTiles() {
    //create JSX for array of products in inventory
    return this
      .props
      .products
      .map(item => <ProductTileContainer key={'product-' + item.id} {...item}/>);
  }

  handleCheckOut() {}

  render() {
    return (
      <div>
        <PageHeader>Fruit Basket &nbsp;
          <small>
            We deliver to your desk daily!</small>
        </PageHeader>
        <Row>
          <Col xs={12} md={8}>
            <h4>Choose a Product</h4>
            {this.renderProductsTiles()}
          </Col>
          <Col xs={12} md={4}>
            <h4>Basket</h4>
            <Button bsStyle="success" bsSize="large" block onClick={this.handleCheckOut()}>Checkout</Button>
            <br/> {this.renderBasket()}
          </Col>

        </Row>
      </div>
    );
  }
}

// map state to props and add extra props useing reducer selectors
function mapStateToProps(state) {
  return {products: state.products, basket: state.basket, uniqueCount: state.basket.uniqueCount, total: state.basket.total, length: state.basket.length};
}

export default connect(mapStateToProps)(BasketContainer);