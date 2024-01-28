import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";
import { useContext } from "react";

function Card({
  item_id,
  title,
  price,
  imageUrl,
  handleClickFavorite,
  handleClickCart,
  isLoading = false,
  isFavorite = false,
}) {
  const {isCartContainItem} = useContext(AppContext);
  return isLoading ? (
    <div className={styles.card}>
      <ContentLoader
        speed={2}
        width={155}
        height={219}
        viewBox="0 0 155 219"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="32" rx="10" ry="10" width="155" height="91" />
        <rect x="0" y="158" rx="3" ry="3" width="93" height="15" />
        <rect x="123" y="187" rx="8" ry="8" width="32" height="32" />
        <rect x="0" y="139" rx="3" ry="3" width="155" height="15" />
        <rect x="0" y="195" rx="8" ry="8" width="80" height="24" />
      </ContentLoader>
    </div>
  ) : (
    <div className={styles.card}>
      <>
        <div
          className={styles.favorite}
          onClick={() =>
            handleClickFavorite({ item_id, title, price, imageUrl })
          }
        >
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
            onClick={() => handleClickCart({ item_id, title, price, imageUrl })}
            src={isCartContainItem(item_id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
            alt="Add"
          />
        </div>
      </>
    </div>
  );
}

export default Card;
