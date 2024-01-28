import { useContext } from "react";
import Favorite from "../components/Favorite";
import { Link } from "react-router-dom";
import AppContext from "../context";

function Favorites({ handleClickFavorite }) {
  const {favorites} = useContext(AppContext);

  const isEmpty = favorites.length === 0;
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Закладки</h1>
      </div>
      {isEmpty && (
        <div className="favoritesEmpty d-flex align-center justify-center flex-column flex">
          <img
            className="mb-20"
            width="70px"
            height="70px"
            src="img/empty-favorites.jpg"
            alt="Empty"
          />
          <h2>Закладок нет</h2>
          <p className="opacity-6">Вы ничего не добавляли в закладки</p>
          <Link to="/">
            <button className="greenButtonFav">
              <img className="mr-20" src="/img/arrow-left.svg" alt="arrow" />
              Вернуться назад
            </button>
          </Link>
        </div>
      )}
      {!isEmpty && (
        <div className="items d-flex flex-wrap">
          {favorites.map((item) => (
            <Favorite
              key={item.id}
              id={item.id}
              item_id={item.item_id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              handleClickFavorite={handleClickFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
