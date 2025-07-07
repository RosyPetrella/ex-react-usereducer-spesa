import { useState, useReducer } from "react";

const products = [
  { name: "Mela", price: 0.5 },
  { name: "Pane", price: 1.2 },
  { name: "Latte", price: 1.0 },
  { name: "Pasta", price: 0.7 },
];

function App() {
  const [addedProducts, setAddedProducts] = useState([]);

  function addToCart(product) {
    const exists = addedProducts.find((p) => p.name === product.name);
    if (!exists) {
      setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
    } else {
      const updatedProducts = addedProducts.map((p) =>
        p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p
      );
      setAddedProducts(updatedProducts);
    }
  }

  function updateProductQuantity(product) {
    const updatedProducts = addedProducts.map((p) => {
      if (p.name === product.name) {
        return { ...p, quantity: p.quantity + 1 };
      }
      return p;
    });
    setAddedProducts(updatedProducts);
  }
  function removeFromCart(product) {
    const updatedProducts = addedProducts
      .map((p) =>
        p.name === product.name ? { ...p, quantity: p.quantity - 1 } : p
      )
      .filter((p) => p.quantity > 0);

    setAddedProducts(updatedProducts);
  }

  //   Al click successivo del bottone "Aggiungi al carrello", se il prodotto è già presente:
  // Usa una funzione updateProductQuantity per incrementare la proprietà quantity del prodotto esistente.
  // Per ogni prodotto nel carrello, aggiungi un bottone "Rimuovi dal carrello":
  // Al click, usa una funzione removeFromCart per rimuovere il prodotto dal carrello.
  // Sotto alla lista del carrello, mostra il totale da pagare:
  // Calcola il totale moltiplicando il prezzo per la quantità di ogni prodotto e somma tutti i risultati.
  // Obiettivo: Gestire l’aggiunta, la rimozione e il calcolo del totale del carrello in modo dinamico.

  return (
    <>
      <h1>Prodotti</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name}, € {product.price}
            <button onClick={() => addToCart(product)}>
              Aggiungi al carrello
            </button>
          </li>
        ))}
      </ul>

      <h1>Carrello</h1>
      {addedProducts.length > 0 ? (
        <>
          <ul>
            {addedProducts.map((prod, index) => (
              <li key={index}>
                {prod.name}, € {prod.price}, {prod.quantity}
                <button onClick={() => removeFromCart(prod)}>
                  Rimuovi dal carrello
                </button>
              </li>
            ))}
          </ul>
          <h2>
            Totale: €{" "}
            {addedProducts
              .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
              .toFixed(2)}
          </h2>
        </>
      ) : (
        <p>Il carrello è vuoto.</p>
      )}
    </>
  );
}

export default App;
