import React from "react";
import styles from "./Card.module.scss";

function Card({item_id, title, price, imageUrl, addToFavorite, changeCart, cartItems}){
  
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickAdd = () => {
     changeCart({item_id, title, price, imageUrl}, !isAdded);
  };

  React.useEffect(() => {
    setIsAdded(Boolean(cartItems.find((item)=> item.item_id === item_id)));
  }
  ,[cartItems, item_id])

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={addToFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
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
