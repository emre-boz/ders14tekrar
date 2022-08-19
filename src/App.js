import React from "react";
import Todos from "./Todos";


function App() {
  const [sayac, sayacGuncelle] = React.useState(0);
 
  const [todos, setTodos] = React.useState([]);

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
