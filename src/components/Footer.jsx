import React from 'react'
import logo from '../../public/img/logo.png'
import unreal from '../../public/img/unreal.png'
import insta from '../../public/img/instagram.png'
import twiter from '../../public/img/twitter.png'
import expand from '../../public/img/expand_arrow_up.svg'

function Footer() {
  return (
    <div>
      <br />
      <br />
      <footer>
        <div className="outer">
          <div className="foot-info">
            <div>
              <img src={insta} alt="logo" height="32px" />
              <img src={twiter} alt="logo" height="27px" />
            </div>
            <img src={expand} alt="logo" height="40px" className="square" />
          </div>
          <br />
          <div className="info-container">
            <h4>Recursos</h4>
            <div className="list-ops">
              <ul>
                <li>
                  <p>Apoyad a un creador</p>
                </li>
                <li>
                  <p>Publicar en Epic Games</p>
                </li>
                <li>
                  <p>Empleo</p>
                </li>
                <li>
                  <p>Compañía</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p>Politica de arte de aficionados</p>
                </li>
                <li>
                  <p>Estudio de experiencias de usuarios</p>
                </li>
                <li>
                  <p>CLUF de la tienda</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p>Servicios en linea</p>
                </li>
                <li>
                  <p>Reglas de la comunidad</p>
                </li>
                <li>
                  <p>Epic Newsroom</p>
                </li>
              </ul>
            </div>
          </div>
          <br />
          <div className="info-container">
            <h4>Creado por Epic Games</h4>
            <div className="list-ops">
              <ul>
                <li>
                  <p>Battle Breakers</p>
                </li>
                <li>
                  <p>Fortnite</p>
                </li>
                <li>
                  <p>Infinity Blade</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p>Robo Recall</p>
                </li>
                <li>
                  <p>Shadow Complex</p>
                </li>
                <li>
                  <p>Unreal Tournament</p>
                </li>
              </ul>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div className="parag">
            <p>
              © 2022, Epic Games, Inc. Todos los derechos reservados. Epic, Epic
              Games, el logotipo de Epic Games, Fortnite, el logotipo de
              Fortnite, Unreal, Unreal Engine, el logotipo de Unreal Engine,
              Unreal Tournament y el logotipo de Unreal Tournament son marcas
              comerciales o marcas registradas de Epic Games, Inc. tanto en
              Estados Unidos de América como en el resto del mundo. Otras marcas
              o nombres de productos son marcas comerciales de sus respectivos
              propietarios. Las transacciones fuera de EE. UU. se realizan a
              través de Epic Games International, S.à r.l.
            </p>
          </div>
          <br />
          <div className="foot-info">
            <div>
              <p>Terminos de servicio</p>
              <p>Politica de privacidad</p>
              <p>Politica de reembolso de la tienda</p>
            </div>
            <div>
              <img src={logo} alt="logo" height="40px" />
              <img src={unreal} alt="unreal" height="60px" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
