import React, { useEffect } from "react";
import styles from "./Card.module.scss";

function Card({
  item_id,
  title,
  price,
  cartItems,
  imageUrl,
  addFavorite,
  removeFavorite,
  addCartItem,
  removeCartItem,
  favorites
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const onClickAdd = () => {
    isAdded
      ? removeCartItem(cartItems.find((obj) => obj.item_id === item_id)?.id)
      : addCartItem({ item_id, title, price, imageUrl });
  };

  const onClickFavorite = () => {
    isFavorite ?
    removeFavorite(favorites.find((obj) => obj.item_id === item_id)?.id)
    :
    addFavorite({item_id, title, price, imageUrl});
    
  };

  useEffect(() => {
    setIsAdded(Boolean(cartItems.find((obj) => obj.item_id === item_id)));
    setIsFavorite(Boolean(favorites.find((obj) => obj.item_id === item_id)));
  }, [cartItems, favorites, item_id]);

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
          alt="favorite"
        />
      </div>
      <img src={imageUrl} alt="" width={133} height={112} />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.button}
          onClick={onClickAdd}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Add"
        />
      </div>
    </div>
  );
}

export default Card;
