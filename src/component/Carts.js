import React from 'react';

export default function Carts(props) {
  const [editCart, setEditCart] = React.useState(props.mapCart.rCart);
  const [isEdit, setIsEdit] = React.useState(false);
  const [count, setCount] = React.useState(0);

  function editing(isEditing) {
    setIsEdit({ isEdit: isEditing });
  }

  function handleChange(e) {
    setEditCart((prev) => e.target.value);
  }

  function AddCart() {
    setCount((prev) => prev + 1);
    props.setQuantity((prev) => prev + 1);
    if (count === 0) {
      props.setSelectCount((prev) => prev + 1);
    }
  }

  function MinusCart() {
    setCount((prev) => prev - 1);
    props.setQuantity((prev) => prev - 1);
    if (count === 1) {
      props.setSelectCount((prev) => prev - 1);
    }
  }

  function deleteCart() {
    props.deleteFromCart(props.id);
    props.setSelectCount((prev) => prev - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editFromCart(props.id, editCart);
    setIsEdit((prev) => (prev = false));
    if (editCart === '') {
      props.deleteFromCart(props.id);
    }
  }

  function resetAll() {
    setCount((prev) => (prev = 0));
    props.setSelectCount((prev) => prev - 1);
  }

  return (
    <tr className="carts-body">
      {isEdit ? (
        <>
          <td>
            <input
              className="edit-input"
              type="text"
              onChange={handleChange}
              value={editCart}
              autoFocus
            />
          </td>
          <td>
            <span>{count <= 0 ? 'Zero' : count}</span>
          </td>
          <td className="my-cart-button">
            <button className="save" onClick={handleSubmit}>
              Save
            </button>
            <button
              className="cancle"
              onClick={() => setIsEdit((prev) => (prev = false))}
            >
              Cancle
            </button>
            <button className="reset" onClick={resetAll}>
              Reset
            </button>
          </td>
        </>
      ) : (
        <>
          <td className="my-cart">{props.mapCart.rCart}</td>
          <td>
            <span>{count <= 0 ? 'Zero' : count}</span>
          </td>
          <td className="my-cart-button">
            <button className="plus" onClick={AddCart}>
              +
            </button>
            <button
              disabled={count <= 0 ? true : false}
              className="minus"
              onClick={MinusCart}
            >
              -
            </button>
            <button
              className="edit"
              onClick={() => setIsEdit((prev) => (prev = true))}
            >
              Edit
            </button>
            <button className="delete" onClick={deleteCart}>
              Delete
            </button>
          </td>
        </>
      )}
    </tr>
  );
}
