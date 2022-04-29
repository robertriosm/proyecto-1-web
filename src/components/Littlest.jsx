import React from 'react'
import PropTypes from 'prop-types'
import galactic2 from '../../public/img/galactic2mini.jpg'

function Littlest({ title }) {
  return (
    <div className="littlest">
      <img src={galactic2} alt="game" width="45px" className="rounded" />
      <p>{title}</p>
    </div>
  )
}

Littlest.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Littlest
