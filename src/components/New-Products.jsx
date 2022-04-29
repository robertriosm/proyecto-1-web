import React from 'react'
import BiggestProduct from './BiggestProduct'
import Littlest from './Littlest'

function NewProducts() {
  return (
    <div className="news">
      <div className="big-one">
        <BiggestProduct
          title="HELLO WORLD"
          description="descripcion del producto que se muestra"
          price="Gratis"
        />
      </div>
      <div className="list-6">
        <Littlest title="Galactic Civilizations IV" />
        <Littlest title="Tiny Tinas Wonderlands" />
        <Littlest title="Oferta de Star Wars" />
        <Littlest title="Genshin Impact" />
        <Littlest title="Otro juego de epic" />
        <Littlest title="Otro juego de epic 2" />
      </div>
    </div>
  )
}

export default NewProducts
