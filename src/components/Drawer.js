function Drawer() {
  return (
    <div className="drawer">
      <h2 className="mb-30 d-flex justify-between">
        Корзина{" "}
        <img className="removeBtn " src="img/btn-delete.svg" alt="Delete" />
      </h2>
      <div className="cartItems">
        <div className="cartItem d-flex align-center">
          <div
            className="cartItemImg"
            style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
          ></div>
          <div className="mr-20">
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <b>12 999 руб.</b>
          </div>
          <img className="removeBtn" src="img/btn-delete.svg" alt="Delete" />
        </div>
        <div className="cartItem d-flex align-center">
          <div
            className="cartItemImg"
            style={{ backgroundImage: "url(/img/sneakers/4.jpg)" }}
          ></div>
          <div className="mr-20">
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <b>12 999 руб.</b>
          </div>
          <img className="removeBtn" src="img/btn-delete.svg" alt="Delete" />
        </div>
      </div>
      <div className="cartTotal">
        <ul>
          <li>
            <span>Итого:</span>
            <div></div>
            <b>25 998 руб.</b>
          </li>
          <li>
            <span>Налог 5%:</span>
            <div></div>
            <b>1 299 руб.</b>
          </li>
        </ul>
        <button className="greenButton">
          Оформить заказ <img src="/img/arrow-right.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Drawer;
