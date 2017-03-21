import React, {Component} from 'react'
import {connect} from 'react-redux'
import {PageHeader, Button, Col, Row} from 'react-bootstrap'
import {calculateBasketTotal, uniqueCount} from '../reducers'
import ProductTileContainer from '../containers/ProductTileContainer'
import BasketTable from '../components/BasketTable'

class BasketContainer extends Component {

  constructor(props) {
    super(props)

    this.handleCheckOut = this
      .handleCheckOut
      .bind(this);

  }

  handleCheckOut() {}

  render() {
    const {basket, products, paymentTotal, uniqueCount} = this.props;
    return (
      <div>
        <PageHeader>Fruit Basket &nbsp;
          <small>
            We deliver to your desk daily!</small>
        </PageHeader>
        <Row>
          <Col xs={12} md={8}>
            <h4>Choose Products</h4>
            {products.map(item => <ProductTileContainer key={'product-' + item.name} {...item}/>)}
          </Col>
          <Col xs={12} md={4}>
            <h4>Basket</h4>
            <Button bsStyle="success" bsSize="large" block onClick={this.handleCheckOut()}>Checkout</Button>
            <br/>
            <BasketTable
              basket={basket}
              paymentTotal={paymentTotal}
              uniqueCount={uniqueCount}/>
          </Col>

        </Row>
      </div>
    );
  }
}

// map state to props and add extra props useing reducer selectors
function mapStateToProps(state) {
  return {
    products: state.products,
    basket: state.basket,
    uniqueCount: uniqueCount(state.basket) || 0,
    paymentTotal: calculateBasketTotal(state) || 0.0
  };
}

export default connect(mapStateToProps, {calculateBasketTotal, uniqueCount})(BasketContainer);