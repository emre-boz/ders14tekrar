import React from "react";
import "./style.css";

function App() {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [q, setQ] = React.useState("");
  //     set search parameters
  //     we only what to search countries by capital and name
  //     this list can be longer if you want
  //     you can search countries even by their population
  // just add it to this array
  const [searchParam] = React.useState(["category", "title"]);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []); //array boş ise sadece ilkinde çalıştır bir daha çalıştırma demek

  function search(items) {
    return items.filter((item) => {
        return searchParam.some((newItem) => {
            return (
                item[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(q.toLowerCase()) > -1
            );
        });
    });
}

  if (error) {
    return (
      <>
        HATA:<p style={{ color: "red" }}>{error.message}</p>
      </>
    );
  } else if (!isLoaded) {
    return <>Yükleniyor...</>;
  } else {
    return (
      /* here we map over the element and display each item as a card  */
      <div className="wrapper">
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Arayın..."
              value={q}
              /*
                                // set the value of our useState q
                                //  anytime the user types in the search box
                                */
              onChange={(e) => setQ(e.target.value)}
            />
            <span className="sr-only">Ürünlerde arayın</span>
          </label>
        </div>
        <ul className="card-grid">
          {search(items).map((item) => (
            <li key={item.id}>
              <article className="card" >
                <div className="card-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="card-content">
                  <h2 className="card-name">{item.name}</h2>
                  <ol className="card-list">
                    <li>
                      Ürün Adı: <span>{item.title}</span>
                    </li>
                    <li>
                      Kategori: <span>{item.category}</span>
                    </li>
                    <li>
                      Fiyat: <span>{item.price}</span>
                    </li>
                  </ol>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
