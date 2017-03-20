import React, {PropTypes} from 'react';
import {ListGroupItem, Button, Badge} from 'react-bootstrap';

const BasketItem = ({
  name,
  quantity,
  price,
  offer,
  rowTotal,
  removeProduct
}) => (
  <ListGroupItem>
    <div className="basket-item-name">{name}
      <span className="basket-item-offer">
        {offer}
      </span>
      <div className="basket-item-remove">
        <Button bsStyle="default" onClick={() => removeProduct(name)}>X
        </Button>
      </div>
    </div>
    <div className="basket-item-price">
      {quantity}
      &nbsp;&nbsp;* &nbsp; &pound;{price.toFixed(2)}
      &nbsp;&nbsp; = &nbsp; {rowTotal.toFixed(2)}</div>

  </ListGroupItem>

);

BasketItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  offer: PropTypes.string.isRequired,
  rowTotal: PropTypes.number.isRequired,
  removeProduct: PropTypes.func.isRequired
}

export default BasketItem;