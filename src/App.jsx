import { useState, useReducer } from "react";

const products = [
  { name: "Mela", price: 0.5 },
  { name: "Pane", price: 1.2 },
  { name: "Latte", price: 1.0 },
  { name: "Pasta", price: 0.7 },
];

// 📌 Milestone 2: Aggiungere prodotti al carrello
// Aggiungi uno stato locale addedProducts (inizialmente un array vuoto) per rappresentare i prodotti nel carrello.
// Per ogni prodotto della lista, aggiungi un bottone "Aggiungi al carrello":
// Al click del bottone, usa una funzione addToCart per:
// Aggiungere il prodotto al carrello se non è già presente, con una proprietà quantity = 1.
// Se il prodotto è già nel carrello, ignora l’azione.
// Sotto alla lista dei prodotti, mostra una lista dei prodotti nel carrello se addedProducts contiene almeno un elemento.
// Per ogni prodotto nel carrello, mostra:
// Nome
// Prezzo
// Quantità

// Obiettivo: L’utente può aggiungere prodotti al carrello e vedere una lista dei prodotti aggiunti.

function App() {
  const [addedProducts, setaddedProducts] = useState([]);

  function addToCart(product) {
    const exists = addedProducts.find((p) => p.name === product.name);
    if (!exists) {
      setaddedProducts([...addedProducts, { ...product, quantity: 1 }]);
    }
  }
  return (
    <>
      <h1>Prodotti</h1>
      <ul>
        {products.map((product, index) => {
          return (
            <div key={index}>
              <li>
                {product.name}, € {product.price}
              </li>
              <button
                onClick={() => {
                  addToCart(product);
                }}
              >
                Aggiungi al carrello
              </button>
            </div>
          );
        })}
      </ul>
      <h1>Carrello</h1>
      {addedProducts.length > 0 && (
        <ul>
          {addedProducts.map((prod, index) => (
            <li key={index}>
              {prod.name}, € {prod.price}, {prod.quantity}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
