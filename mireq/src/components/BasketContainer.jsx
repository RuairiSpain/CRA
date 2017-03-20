import React, {Component, PropTypes} from 'react';
import {Table, Button, Col, Row} from 'react-bootstrap';
import Product from './Product';
import BasketItem from './BasketItem';
import {Basket as BasketModel} from '../model/Basket';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from '../../../../../../../../../Users/ruair/Documents/GitHub/CRA/mireq/src/reducers/auth';

class BasketContainer extends Component {

  static propTypes = {
    products: PropTypes.array
  }

  static defaultProps = {
    products: []
  }

  constructor(props) {
    super(props)

    this.handleCheckOut = this
      .onCheckOutClick
      .bind(this);

//    this.state = {
//      basket: new BasketModel()
//    }
  }

  componentDidMount() {
    //this.setState({basket: getData()});
  }

  handleAddProduct(productNamee){


  }

  handleUpdateProduct(productName, quantity){

  }

  handleDeleteProduct(productName){

  }

  render() {
    //create JSX for basket
    const basketRows = this
      .props
      .sortedBasket.map(item => <BasketItem key={item.name} {...item} addProduct={this.handleAddProduct}/>);
    //create JSX for array of products in inventory
    const products = this
      .props
      .products
      .map(item => <Product key={item.name} {...item} updateProduct={this.handleUpdateProduct} deleteProduct={this.handleDeleteProduct}/>);

    return (
      <Row>
        <Col xs={12} md={6}>
          <h4>Choose a Product</h4>
          <Table>{products}</Table>
        </Col>
        <Col xs={12} md={6}>
          <h4>Basket</h4>
          <Table>{basketRows}</Table>
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
    basket: state.basket,
    uniqueCount: state.basket.uniqueCount,
    total:  state.basket.total.toFixed(2),
    sortedBasket: state.basket.toArray().sort(row => row.name),
    length : state.basket.length
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoginClick: (email, password) => {
      dispatch(actions.submitLogin(email, password));
      dispatch(actions.changeRootNav(rootNavs.OVERVIEW_NAV))
    },
    onEmailUpdate: (email) => dispatch(actions.updateEmail(email)),
    onPasswordUpdate: (password) => dispatch(actions.updatePassword(password)),
};
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketContainer);