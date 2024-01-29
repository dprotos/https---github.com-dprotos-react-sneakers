import { useEffect, useState } from "react";
import Order from "../components/Order";
import { Link } from "react-router-dom";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    ( async () => {
      const { data } = await axios.get("http://localhost:4000/orders?_sort=-date");
      setOrders(data);
    })();
  }, []);

  const isEmpty = orders.length === 0;

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Заказы</h1>
      </div>
      {isEmpty && (
        <div className="favoritesEmpty d-flex align-center justify-center flex-column flex">
          <img
            className="mb-20"
            width="70px"
            height="70px"
            src="img/empty-orders.jpg"
            alt="Empty"
          />
          <h2>Заказов нет</h2>
          <p className="opacity-6">Оформите хотябы один заказ</p>
          <Link to="/">
            <button className="greenButtonFav">
              <img className="mr-20" src="/img/arrow-left.svg" alt="arrow" />
              Вернуться назад
            </button>
          </Link>
        </div>
      )}
      {!isEmpty && (
        <div className="ordersList d-flex flex-wrap">
          {orders.map((order) => (
            <Order
              key={order.id}
              {...order}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
