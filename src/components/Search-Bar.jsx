import React from 'react'
import lupa from '../../public/img/search.svg'

function SearchBar() {
  return (
    <nav>
      <div>
        <div>
          <div className="search-input">
            <img src={lupa} alt="Ye" className="lupa" height="20px" />
            <input type="text" placeholder="Buscar" />
          </div>
        </div>
        <div>
          <p>Descubrir</p>
        </div>
        <div>
          <p>Examinar</p>
        </div>
        <div>
          <p>Noticias</p>
        </div>
      </div>
      <div>
        <div>
          <p>Lista de deseos</p>
        </div>
        <div>
          <p>Carrito</p>
        </div>
      </div>
    </nav>
  )
}

export default SearchBar
