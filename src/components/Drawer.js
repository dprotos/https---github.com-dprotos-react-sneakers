import React from "react";

function Drawer({ cartItems = [], handleClose, removeCartItem }) {
  const totalCartSum = cartItems.reduce(
    (sum, current) => sum + Number(current.price),
    0
  );
  const [cartIsEmpty, setCartIsEmpty] = React.useState(true);




  React.useEffect(() => {
    setCartIsEmpty(cartItems.length === 0);
  }, [cartItems]);

  return (
    <div className="overlay">
      <div className="drawer">
        {!cartIsEmpty && (
          <h2 className="mb-30 d-flex justify-between">
            Корзина
            <img
              className="removeBtn"
              onClick={handleClose}
              src="img/btn-delete.svg"
              alt="Delete"
            />
          </h2>
        )}
        {cartIsEmpty && (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width="120px"
              height="120px"
              src="img/empty-cart.jpg"
              alt="Empty"
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">
              Добавьте хотя бы один товар, чтобы сделать заказ
            </p>
            <button onClick={handleClose} className="greenButton">
              <img className="mr-20" src="/img/arrow-left.svg" alt="arrow" />
              Вернуться назад
            </button>
          </div>
        )}
        {!cartIsEmpty && (
          <div className="cartItems">
            {cartItems.map((obj) => (
              <div className="cartItem d-flex align-center">
                <div
                  className="cartItemImg"
                  style={{ backgroundImage: `url(${obj.imageUrl})` }}
                ></div>
                <div className="mr-20">
                  <p>{obj.title}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <img
                  className="removeBtn"
                  onClick={() => removeCartItem(obj.id)}
                  src="img/btn-delete.svg"
                  alt="Delete"
                />
              </div>
            ))}
          </div>
        )}
        {!cartIsEmpty && (
          <div className="cartTotal">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>{totalCartSum} руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>{totalCartSum * 0.05} руб.</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ <img src="/img/arrow-right.svg" alt="" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
