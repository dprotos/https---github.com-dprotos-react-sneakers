function Drawer({cartItems=[], handleClose, changeCart}) {
  
  const totalCartSum = cartItems.reduce((sum, current)=>(sum + Number(current.price)),0);

  const removeItem = (obj) => {
    changeCart(obj, false);
  }

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img className="removeBtn" onClick = {handleClose} src="img/btn-delete.svg" alt="Delete" />
        </h2>
        <div className="cartItems">
          {cartItems.map((obj) => (
          <div className="cartItem d-flex align-center">
            <div
              className="cartItemImg"
              style={{backgroundImage: `url(${obj.imageUrl})`}}
            ></div>
            <div className="mr-20">
              <p>{obj.title}</p>
              <b>{obj.price} руб.</b>
            </div>
            <img className="removeBtn" onClick={()=>removeItem(obj)} src="img/btn-delete.svg" alt="Delete" />
          </div>))}
        </div>
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
              <b>{totalCartSum*0.05} руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow-right.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
