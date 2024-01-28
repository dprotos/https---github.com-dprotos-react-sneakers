import Card from "../components/Card";

function Home({
  items,
  cart,
  favorites,
  searchString,
  searchItems,
  isLoading,
  handleClickFavorite,
  handleClickCart,
  clearSearch,
}) {
  
  function renderItems(){
    if (isLoading) {
      const fakeItems = [...Array(12)];
      return fakeItems.map((item, index) => (
        <Card key={index} isLoading={isLoading} />
      ));
    } else {
      return items
        .filter((item) =>
          item.title.toLowerCase().includes(searchString.toLowerCase())
        )
        .map((item) => (
          <Card
            item_id={item.key}
            handleClickCart={handleClickCart}
            handleClickFavorite={handleClickFavorite}
            isLoading={isLoading}
            isFavorite={favorites.some((obj) => obj.item_id === item.key)}
            {...item}
          />
        ));
    }
  };

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
      <div className="items d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;
