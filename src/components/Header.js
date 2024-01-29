import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function Header({ handleOpenDrawer}) {
  const {totalCartSum} = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex alig-center">
          <img src="/img/logo.png" alt="Logo" width={40} height={40} />
          <div>
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li
          className="d-flex mr-30 align-center cu-p"
          onClick={handleOpenDrawer}
        >
          <img src="/img/cart.svg" alt="cart" width={18} height={18} />
          <div>
            <span>{totalCartSum} руб.</span>
          </div>
        </li>
        <li>
          <Link to="/favorites">
            <img
              className="mr-20 cu-p"
              src="/img/favorites.svg"
              alt="favorites"
              width={18}
              height={18}
            />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img
              className="mr-20 cu-p"
              src="/img/user.svg"
              alt="user"
              width={18}
              height={18}
            />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
