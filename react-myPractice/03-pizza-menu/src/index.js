import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// 05007 - creating more components
// 05010 - apply css to react applications
// 05011 - props（properties）- communication channel between parent & child
// • props：外部传入（父 → 子），组件的“输入” read-only
// • state：组件内部自己管理的状态，会变化并触发重新渲染
function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

// 05016-05018 conditional rendering - no if-else statement
function Menu() {
  // const pizzas = [];
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* // 05016 - rendering lists */}
      {numPizzas > 0 ? (
        // react fragments - 在不额外创建真实 DOM 节点的情况下，把多个子元素包起来
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              // <Pizza name={pizza.name} photoName={pizza.photoName} />
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}

      {/* <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={8}
      /> */}
    </main>
  );
}

// 05005 - craeting & reusing a component
function Pizza({ pizzaObj }) {
  // destruct props - pizzaObj - 05020

  // if (pizzaObj.soldOut) return null;
  // setting classes and text conditionally - 05022
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>

      {/* different 2 ways */}
      {/* {pizzaObj.soldOut ? <span>Sold Out</span> : <span>{pizzaObj.price}</span>} */}
      <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price + 3}</span>
    </li>
  );
}

function Footer() {
  // without JSX - return <footer>We're currently open!</footer>;
  // return React.createElement("footer", null, "We're currently open!");

  // also js code can run here
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // multi returns
  /*
  if (!isOpen) {
    return (
      <p>
        We're Happy to welcome you between {openHour}:00 and {closeHour}:00
      </p>
    );
  }
  */

  return (
    // <footer>{new Date().toLocaleTimeString()}. We're currently open!</footer>
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're Happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We're Open from {openHour}:00 until {closeHour}:00. Come visit and try!
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// before 18
// React.render(<App />, document.getElementById("root"))
