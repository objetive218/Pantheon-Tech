import React,{useContext} from 'react'
import CarritoContext from '../contexts/CarritoContext';
import ModCarStyle from "../css/ModeloCar.module.css"

const ModeloCar = (props) => {
  const { eliminarModel, addModel } = useContext(CarritoContext);
  return (
    <section className={ModCarStyle.box}>
      <img className={ModCarStyle.image} src={props.url} alt="imagen" />
      <h1>{props.modelo}</h1>
      <h2>{props.precio}</h2>
      <h2>{props.cantidad}</h2>
      <form action="#">
          <button className={ModCarStyle.botton1}
            type="button"
            onClick={function () {
              addModel(props.elemento, 1);
            }}
          >
            +
          </button>
          <button className={ModCarStyle.botton1}
            type="button"
            onClick={function () {
              eliminarModel(props.id);
            }}
          >
            -
          </button>
        </form>
    </section>
  )
}

export default ModeloCar