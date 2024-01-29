import styles from "./OrderCard.module.scss";

function OrderCard({
  id,
  item_id,
  title,
  price,
  imageUrl
}) {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt="" width={100} height={80} />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
