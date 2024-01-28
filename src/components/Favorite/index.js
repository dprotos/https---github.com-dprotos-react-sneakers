import styles from "./Favorite.module.scss";

function Favorite({
  id,
  item_id,
  title,
  price,
  imageUrl,
  handleClickFavorite
  
}) {
  const onClickFavorite = () => {
    handleClickFavorite({id, item_id})
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          src={"/img/heart-liked.svg"}
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
      </div>
    </div>
  );
}

export default Favorite;
