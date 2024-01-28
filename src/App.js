import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import AppContext from "./context";

import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Favorites from "./pages/Favorites";

import Header from "./components/Header";
import Drawer from "./components/Drawer";



function App() {
  const [items, setItems] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [searchString, setSearchString] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    try {
      async function fetchData() {
        const resCart = await axios.get("http://localhost:4000/cart");
        const resFavorites = await axios.get("http://localhost:4000/favorites");
        const resItems = await axios.get("http://localhost:4000/items");

        setTimeout(() => {
          //эмуляция задержки бэка
          setIsLoading(false);
          setCart(resCart.data);
          setFavorites(resFavorites.data);
          setItems(resItems.data);
        }, 800);
      }
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleClickCart = (obj) => {
    const cartElement = cart.find(
      (cartItem) => cartItem.item_id === obj.item_id
    );
    if (cartElement) {
      axios
        .delete(`http://localhost:4000/cart/${cartElement.id}`)
        .then(() => {
          setCart((prev) =>
            prev.filter((item) => item.id !== cartElement.id)
          );
        })
        .catch((err) => alert(err));
    } else {
      axios
        .post("http://localhost:4000/cart", obj)
        .then((res) => {
          setCart((prev) => [...prev, res.data]);
        })
        .catch((err) => alert(err));
    }
  };

  const isCartContainItem = (id) => {
    return(
      cart.some((obj)=>obj.item_id===id)
    )
  }

  const handleClickFavorite = (obj) => {
    const favElement = favorites.find((fav) => fav.item_id === obj.item_id);
    if (favElement) {
      axios
        .delete(`http://localhost:4000/favorites/${favElement.id}`)
        .then(() => {
          setFavorites((prev) =>
            prev.filter((item) => item.id !== favElement.id)
          );
        })
        .catch((err) => alert(err));
    } else {
      axios
        .post("http://localhost:4000/favorites", obj)
        .then((res) => {
          setFavorites((prev) => [...prev, res.data]);
        })
        .catch((err) => alert(err));
    }
  };

  const searchItems = (event) => {
    setSearchString(event.target.value);
  };

  const clearSearch = () => {
    setSearchString("");
  };

  return (
    <AppContext.Provider value={{items, cart, favorites, isCartContainItem, setCart}}>
      <div className="wrapper clear">
        {drawerOpen && (
          <Drawer
            handleClose={() => setDrawerOpen(false)}
            cartItems={cart}
            handleClickCart={handleClickCart}
          />
        )}
        <Header
          handleOpenDrawer={() => setDrawerOpen(true)}
          cartTotalSum={cart.reduce(
            (sum, current) => sum + Number(current.price),
            0
          )}
        />
        <Route exact path="/">
          <Home
            items={items}
            cart={cart}
            favorites={favorites}
            searchString={searchString}
            searchItems={searchItems}
            clearSearch={clearSearch}
            handleClickCart={handleClickCart}
            handleClickFavorite={handleClickFavorite}
            isLoading={isLoading}
          />
        </Route>
        <Route exact path="/favorites">
          <Favorites            
            handleClickFavorite={handleClickFavorite}
          />
        </Route>
        <Route exact path="/orders">
          <Orders items={favorites} />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
