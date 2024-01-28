function Card9(props) {
  return (
    <>
      <div>
        <img src={props.resimUrl} alt={props.baslik} />
        <h2>{props.baslik} </h2>
        <div>
          <button>
            <h4>
              Sepete Ekle <i>➕</i>
            </h4>
          </button>
        </div>
      </div>
    </>
  );
}

export default Card9;
