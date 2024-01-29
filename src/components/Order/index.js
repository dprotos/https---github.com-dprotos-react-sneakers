import React from "react";
import OrderCard from "../OrderCard";
import styles from "./Order.module.scss";

function Order({ items = [], id, total, date }) {
  const localeDate = new Date(date).toLocaleString("ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timezone: "UTC+3",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  console.log(localeDate);
  return (
    <div className={styles.order}>
      <div className={styles.header}>
        <div className="d-flex justify-between p-10">
          <h3>{`Заказ #${id}`}</h3>
          <div className="d-flex opacity-5">
            <span className="ml-10">{localeDate}</span>
            <span className="ml-10">
              Сумма: <b>{total}</b> руб.
            </span>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap pl-10 pt-10">
        {items.map((item) => (
          <OrderCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Order;
