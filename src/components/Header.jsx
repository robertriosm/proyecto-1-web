import React from 'react'
import logo from '../../public/img/logo.png'
import language from '../../public/img/language.svg'
import person from '../../public/img/person.svg'

function Header() {
  return (
    <header>
      <div>
        <div className="logo">
          <input type="image" src={logo} alt="logo" height="42" />
        </div>
        <div>
          <p>TIENDA</p>
        </div>
        <div>
          <p>PREGUNTAS FRECUENTES</p>
        </div>
        <div>
          <p>AYUDA</p>
        </div>
        <div>
          <p>UNREAL ENGINE</p>
        </div>
      </div>
      <div className="right-nav">
        <div className="language-nav">
          <img src={language} alt="language icon" height="28" />
        </div>
        <div className="profile-nav">
          <img src={person} alt="person icon" height="28" />
          <p>THEWIZARDROB</p>
        </div>
        <div className="nav-blue">CONSIGUE EPIC GAMES</div>
      </div>
    </header>
  )
}

export default Header
