import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://65b2d15f9bfb12f6eafe76e1.mockapi.io/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const changeCart = (obj, isAdded) => {
    if (isAdded) {
      setCartItems((prev) => [...prev, obj]);
    } else {
      setCartItems((prev) => prev.filter((item) => item.item_id!== obj.item_id));
    }
  }


  return (
    <div className="wrapper clear">
      {drawerOpen && <Drawer handleClose={() => setDrawerOpen(false)} cartItems={cartItems} changeCart={changeCart}/>}
      <Header handleOpenDrawer={() => setDrawerOpen(true)} cartTotalSum={cartItems.reduce((sum, current)=>(sum + Number(current.price)),0)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все товары</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="items d-flex flex-wrap">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              item_id={item.key}
              key = {item.key}
              changeCart={changeCart}
              cartItems={cartItems}
              addToFavorite={() => alert(item.key)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
