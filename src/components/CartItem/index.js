import styles from "./CartItem.module.scss";

function CartItem({id, item_id, title, price, imageUrl, handleClickCart}) {
  return (
    <div className={`${styles.cartItem} d-flex align-center`}>
    <div
      className={styles.cartItemImg}
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="mr-20">
      <p>{title}</p>
      <b>{price} руб.</b>
    </div>
    <img
      className={styles.removeBtn}
      onClick={() => handleClickCart({id, item_id})}
      src="img/btn-delete.svg"
      alt="Delete"
    />
  </div>
  );
}

export default CartItem;
