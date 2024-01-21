function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex alig-center">
        <img src="/img/logo.png" alt="Logo" width={40} height={40} />
        <div>
          <h3 className="text-uppercase">REACT SNEAKERS</h3>
          <p className="opacity-5">Магазин кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30 align-center">
          <img src="/img/cart.svg" alt="Logo" width={18} height={18} />
          <span className="align-center">25 998 руб.</span>
        </li>
        <li>
          <img src="/img/user.svg" alt="Logo" width={18} height={18} />
        </li>
      </ul>
    </header>
  );
}

export default Header;
