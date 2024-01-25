import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 13000,
    imageUrl: "/img/sneakers/1.jpg",
    key:1,
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 14000,
    imageUrl: "/img/sneakers/2.jpg",
    key:2,
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 13000,
    imageUrl: "/img/sneakers/3.jpg",
    key:3,
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 9000,
    imageUrl: "/img/sneakers/4.jpg",
    key:4,
  },
];

function App() {
  const cardIsOpen = "none";
  return (
    <div className="wrapper clear">
      <div style={{ display: cardIsOpen }} className="overlay">
        <Drawer />
      </div>

      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все товары</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="items d-flex">
          {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} key={obj.key} onClick={() => alert(obj.title)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
