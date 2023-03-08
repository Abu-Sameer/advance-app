import React from 'react';
import CartBar from './CartBar';
import CreateCart from './CreateCart';
import './UserCart.css';

// const realCart = localStorage.getItem('my cart')
//   ? JSON.parse(localStorage.getItem('my cart'))
//   : [];

const realCart = localStorage.getItem('my cart')
  ? JSON.parse(localStorage.getItem('my cart'))
  : [];
export default function UserCart() {
  const [cart, setCart] = React.useState({ realCart });
  const [selectCount, setSelectCount] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);

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
      <h1>Shopping Cart Application</h1>
      <div className="count-amount">
        Amount of item selected:{' '}
        <span>{selectCount <= 0 ? 'Zero' : selectCount} </span>
      </div>
      <div className="count-quantity">
        Quantity of all item selected:{' '}
        <span>{quantity <= 0 ? 'Zero' : quantity} </span>
      </div>
      <CreateCart createNewCart={createNewCart} />
      <CartBar
        realCart={realCart}
        deleteFromCart={deleteFromCart}
        editFromCart={editFromCart}
        setSelectCount={setSelectCount}
        setQuantity={setQuantity}
      />
    </div>
  );
}
