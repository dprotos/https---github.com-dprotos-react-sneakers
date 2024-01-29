import { useState, useEffect } from "react";
import axios from "axios";

import { useCart } from "../../hooks/useCart";
import CartItem from "../CartItem";
import CartInfo from "../CartInfo";

import styles from "./Drawer.module.scss";

function Drawer({ handleClose, handleClickCart, drawerOpen }) {
  const { cart, setCart, totalCartSum } = useCart();
  const [orderId, setOrderId] = useState("");
  const [orderProcessing, setOrderProcessing] = useState(false);
  
  const [cartIsEmpty, setCartIsEmpty] = useState(true);
  const [orderCreated, setOrderCreated] = useState(false);

  const createOrder = async () => {
    setOrderProcessing(true);
    try {
      const { data } = await axios.post("http://localhost:4000/orders", {
        items: cart,
        total: totalCartSum,
        tax: totalCartSum * 0.05,
        date: new Date()
      });
      await cart.map((obj) =>
        axios.delete(`http://localhost:4000/cart/${obj.id}`)
      );
      setTimeout(() => {
        setOrderId(data.id);
        setOrderCreated(true);
        setCart([]);
        setOrderProcessing(false);
      }, 2000);
    } catch (err) {
      console.log(err);
      setOrderProcessing(false);
    }

    
  };

  useEffect(() => {
    setCartIsEmpty(cart.length === 0);
  }, [cart]);

  return (
    <div className={`${styles.overlay} ${drawerOpen&&styles.overlayOpen}`}>
      <div className={`${styles.drawer}`}>
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
        {orderCreated && (
          <CartInfo
            title="Заказ оформлен!"
            description={`Ваш заказ #${orderId} принят в работу`}
            imageUrl="img/complete-order.jpg"
            handleClose={() => {
              handleClose();
              setOrderCreated(false);
            }}
          />
        )}
        {!orderCreated && cartIsEmpty && (
          <CartInfo
            title="Корзина пуста"
            description="Добавьте хотя бы один товар, чтобы сделать заказ"
            imageUrl="img/empty-cart.jpg"
            handleClose={handleClose}
          />
        )}
        {!cartIsEmpty && (
          <div className="cartItems">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                handleClickCart={handleClickCart}
                {...item}
              />
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
            <button
              disabled={orderProcessing}
              onClick={createOrder}
              className="greenButton"
            >
             {orderProcessing ? "Идёт оформление заказа" : "Оформить заказ"}<img src="/img/arrow-right.svg" alt="" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
