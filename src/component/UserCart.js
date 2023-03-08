import React from 'react';
import CartBar from './CartBar';
import CreateCart from './CreateCart';
import './UserCart.css';

const realCart = localStorage.getItem('my cart')
  ? JSON.parse(localStorage.getItem('my cart'))
  : [];
export default function UserCart() {
  const [cart, setCart] = React.useState({ realCart });
  const [cartCount, setCartCount] = React.useState(0);

  function createNewCart(rCart) {
    if (rCart.trim() === '') {
      alert('please add goods to your shopping cart');
      return;
    }
    realCart.push({ rCart, isCompleted: false });
    setCart({ cart: realCart });
    localStorage.setItem('my cart', JSON.stringify(realCart));
  }

  function deleteFromCart(deleteId) {
    realCart.splice(deleteId, 1);
    setCart({ cart: realCart });
    localStorage.setItem('my cart', JSON.stringify(realCart));
  }

  function editFromCart(editId, edit) {
    const editCart = realCart[editId];
    editCart.rCart = edit;
    setCart({ cart: realCart });
    localStorage.setItem('my cart', JSON.stringify(realCart));
  }

  return (
    <div className="cart-main">
      <h2>Shoping Cart Application</h2>
      <div className="count-amount">
        Amount of item selected:{' '}
        <span>{cartCount <= 0 ? 'Zero' : cartCount} </span>
      </div>
      <CreateCart createNewCart={createNewCart} />
      <CartBar
        realCart={realCart}
        deleteFromCart={deleteFromCart}
        editFromCart={editFromCart}
        setCartCount={setCartCount}
      />
    </div>
  );
}
