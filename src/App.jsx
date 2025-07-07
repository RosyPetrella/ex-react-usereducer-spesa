import { useState, useReducer } from "react";

const products = [
  { name: "Mela", price: 0.5 },
  { name: "Pane", price: 1.2 },
  { name: "Latte", price: 1.0 },
  { name: "Pasta", price: 0.7 },
];

function App() {
  return (
    <>
      <h1>Prodotti</h1>
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index}>
              {product.name}, € {product.price}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
// Crea un componente che mostra la lista dei prodotti.
// Per ogni prodotto, mostra:
// Nome
// Prezzo
// Obiettivo: Vedere un elenco leggibile di tutti i prodotti con nome e prezzo.
