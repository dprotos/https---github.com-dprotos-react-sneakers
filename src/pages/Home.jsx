import Card from "../components/Card";

function Home({items, searchString, searchItems, favorites, cartItems, removeFavorite, addFavorite, addCartItem, removeCartItem, clearSearch}){ 
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchString ? `Поиск: ${searchString}` : "Все товары"}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input
            onChange={searchItems}
            value={searchString}
            placeholder="Поиск..."
          />
          {searchString && (
            <img
              className="clear"
              onClick={clearSearch}
              src="/img/clear.svg"
              alt="Clear"
            />
          )}
        </div>
      </div>

      <div className="items d-flex flex-wrap">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchString.toLowerCase())
          )
          .map((item) => (
            <Card
              key={item.key}
              item_id={item.key}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              addCartItem={addCartItem}
              removeCartItem={removeCartItem}
              cartItems={cartItems}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              favorites={favorites}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
