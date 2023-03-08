import React from 'react';

export default function CreateCart(props) {
  const [newCart, setNewCart] = React.useState({ carts: '' });

  function handleChange(e) {
    setNewCart((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.createNewCart(newCart.carts);
    setNewCart((prev) => {
      return {
        ...prev,
        carts: (prev.carts = ''),
      };
    });
  }

  return (
    <div className="cart-enter">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="carts"
          value={newCart.carts}
          onChange={handleChange}
          autoFocus
          placeholder="Enter your wants"
        />
        <button>Add</button>
      </form>
    </div>
  );
}
