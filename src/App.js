import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [searchString, setSearchString] = React.useState("");
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:4000/items").then((res) => setItems(res.data));
    axios
      .get("http://localhost:4000/cart")
      .then((res) => setCartItems(res.data));
    axios
      .get("http://localhost:4000/favorites")
      .then((res) => setFavorites(res.data));
  }, []);

  const addCartItem = (obj) => {
    axios
      .post("http://localhost:4000/cart", obj)
      .then((res) => {
        setCartItems((prev) => [...prev, res.data]);
      })
      .catch((err) => alert(err));
  };

  const removeCartItem = (id) => {
    axios
      .delete(`http://localhost:4000/cart/${id}`)
      .then(() => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
      })
      .catch((err) => alert(err));
  };

  const removeFavorite = (id) => {
    axios
      .delete(`http://localhost:4000/favorites/${id}`)
      .then(() => {
        setFavorites((prev) => prev.filter((item) => item.id !== id));
      })
      .catch((err) => alert(err));
  };

  const addFavorite = (obj) => {
    axios
      .post("http://localhost:4000/favorites", obj)
      .then((res) => {
        setFavorites((prev) => [...prev, res.data]);
      })
      .catch((err) => alert(err));
  };

  const searchItems = (event) => {
    setSearchString(event.target.value);
  };

  const clearSearch = () => {
    setSearchString("");
  };

  return (
    <div className="wrapper clear">
      {drawerOpen && (
        <Drawer
          handleClose={() => setDrawerOpen(false)}
          cartItems={cartItems}
          addCartItem={addCartItem}
          removeCartItem={removeCartItem}
        />
      )}

      <Header
        handleOpenDrawer={() => setDrawerOpen(true)}
        cartTotalSum={cartItems.reduce(
          (sum, current) => sum + Number(current.price),
          0
        )}
      />
      <Route exact path="/">
        <Home
          items={items}
          searchString={searchString}
          searchItems={searchItems}
          clearSearch={clearSearch}
          favorites={favorites}
          cartItems={cartItems}
          addCartItem={addCartItem}
          removeCartItem={removeCartItem}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
        />
      </Route>
    </div>
  );
}

export default App;
