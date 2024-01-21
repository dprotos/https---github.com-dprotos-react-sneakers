function App() {
  return (
    <div className="wrapper clear">
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
            <span className="align-center">12050 руб.</span>
          </li>
          <li>
            <img src="/img/user.svg" alt="Logo" width={18} height={18} />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все товары</h1>
        <div className="d-flex">
          <div className="card">
            <img src="/img/sneakers/1.jpg" alt="" width={133} height={112} />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/add_cart.svg" alt="Add" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/2.jpg" alt="" width={133} height={112} />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/add_cart.svg" alt="Add" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/3.jpg" alt="" width={133} height={112} />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/add_cart.svg" alt="Add" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/4.jpg" alt="" width={133} height={112} />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/add_cart.svg" alt="Add" width={11} height={11} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
