import React from 'react'

const Computadores = () => {
  const comp = catalogo.filter(function (item) {
    return item.categoria == "celulares";
  });
  return (
    <div>Computadores</div>
  )
}

export default Computadores