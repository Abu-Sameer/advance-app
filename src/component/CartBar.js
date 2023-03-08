import React from 'react';
import Carts from './Carts';

export default function CartBar(props) {
  return (
    <table>
      <thead>
        <tr>
          <th className="th-myCart">My Cart</th>
          <th className="th-amount">Amount</th>
          <th className="th-cart-keys">Cart Keys</th>
        </tr>
      </thead>
      <tbody>
        {props.realCart.map((mapCart, index) => (
          <Carts
            key={index}
            id={index}
            mapCart={mapCart}
            deleteFromCart={props.deleteFromCart}
            editFromCart={props.editFromCart}
            setCartCount={props.setCartCount}
          />
        ))}
      </tbody>
    </table>
  );
}
