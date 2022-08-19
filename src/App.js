import React from "react";
import Todos from "./Todos";

const cokZamanAlanFonksiyon = (num) => {
  console.log("Hesaplama yapılıyor...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

function App() {
  const [sayac, sayacGuncelle] = React.useState(0);
  const [todos, setTodos] = React.useState([]);
  const hesaplamaSonucu = React.useMemo(()=>cokZamanAlanFonksiyon(sayac),[todos]);

  const increment = () => {
    sayacGuncelle((oncekiSayac) => oncekiSayac + 1);
  };

  // const kitaplar={};
  // const isim="Hasan";
  const addTodo = React.useCallback(() => {
    let saniye= new Date().getSeconds();
    setTodos((oncekiDizi) => [...oncekiDizi, "Yapılacak iş"+saniye]);
  }, []);



  return (
    <>
    <p>Hesaplama Sonucu: {hesaplamaSonucu}</p>
      <Todos todos={todos}  addTodo={addTodo}/> 
      <hr />
      <div>
        sayac: {sayac}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default App; 
