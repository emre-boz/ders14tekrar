import { useState } from "react";
import Baglanti from "./Baglanti";
import Card from "./Card";
import "./style.css";
import TemaContext from "./contexts/TemaContext";

function App() {
  const [tema, temaGuncelle] = useState("siyah");

  const renkDegistir=(renkAdi)=>{
    temaGuncelle(renkAdi);
  }

  return (
    <>
      <TemaContext.Provider value={tema}>
      <header>
        <div>LOGO</div>
        <nav>
          <Baglanti url="#">Bağlantı 1</Baglanti>
          <Baglanti url="#">Bağlantı 2</Baglanti>
          <Baglanti url="#">Bağlantı 3</Baglanti>
          <Baglanti url="#">Bağlantı 4</Baglanti>
        </nav>
      </header>

    
        <section>
          <h2>Yeni Ürünler</h2>
          <div className="urun-liste">
            <Card gorsel="https://lipsum.app/id/25/200x150" urunAdi="Ürün 1" />
            <Card gorsel="https://lipsum.app/id/35/200x150" urunAdi="Ürün 2" />
            <Card gorsel="https://lipsum.app/id/45/200x150" urunAdi="Ürün 3" />
            <Card gorsel="https://lipsum.app/id/55/200x150" urunAdi="Ürün 4" />
          </div>
        </section>
   

      <footer>
        <p>Tüm hakları saklıdır.</p>
      </footer>

      <div className="temaButonlar">
        <button onClick={()=>{renkDegistir("kirmizi")}}>Kırmızı</button>
        <button onClick={()=>{renkDegistir("siyah")}}>Siyah</button>
        <button onClick={()=>{renkDegistir("mavi")}}>Mavi</button>
      </div>
      </TemaContext.Provider>
    </>
  );
}

export default App;
