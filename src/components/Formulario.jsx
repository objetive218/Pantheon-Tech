import React,{useState,useContext} from 'react';

import FormularioStyle from "../css/Formulario.module.css"



const Formulario = () => {
  const {productos} = useContext(CatalogoContext)
  const [nombre, setNombre] = useState("");
  const [caracteristicas, setCaracteristicas] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [prodAdd, setProAdd] = useState({});

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log({nombre, caracteristicas, categoria, precio, imagen})}
  return (
    <form onSubmit={handleSubmit} className={`${FormularioStyle.form}`}>
      <label htmlFor='nombre'className={`${FormularioStyle.label}`}>
      Nombre del artículo:</label>
      <input type='text' id='nombre' name='nombre' value={nombre}
      onChange={(event) => setNombre(event.target.value)}
      required
      className={`${FormularioStyle.input}`}
      />
      
      <label htmlFor='caracteristicas' className={`${FormularioStyle.label}`}>
      Características:</label>
      <textarea
      id='características'
      name='características'
      value={caracteristicas}
      onChange={(event) => setCaracteristicas(event.target.value)}
      placeholder='Ingrese acá las siguientes características:
            Cámara: 50MP
            Memoria: 128GB
            Batería: 5000mAH'
            required
            className={`${FormularioStyle.input}`}
            />
            
            <label htmlFor='categoria' className={`${FormularioStyle.label}`}>Categoría:</label>
            <select
            id='categoria'
            name='categoria'
            value={categoria}
            onChange={(event) => setCategoria(event.target.value)}
            required
            className={`${FormularioStyle.input}`}
            >
            <option value="">Selecciona una opción</option>
            <option value="celulares">Celulares</option>
            <option value="computadores">Computadores</option>
            <option value="videojuegos">Videojuegos</option>
            <option value="consolas">Consolas</option>
            <option value="audio">Audio</option>
            </select>
            
            <label htmlFor='precio' className={`${FormularioStyle.label}`}>Precio COP:</label>
            <input
            type='number'
            id='precio'
            name='precio'
            value={precio}
            onChange={(event) => setPrecio(event.target.value)}
            required
            className={`${FormularioStyle.input}`}
            />
            
            <label htmlFor='imagen' className={`${FormularioStyle.label}`}>URL de la imagen:</label>
            <input
            type='url'
            id='imagen'
            name='imagen'
            value={imagen}
            onChange={(event) => setImagen(event.target.value)}
            required
            className={`${FormularioStyle.input}`}
            />
            
            <button type='submit' className={`${FormularioStyle.button}`}>Enviar</button>
            </form>
    
  )
}

            
export default Formulario