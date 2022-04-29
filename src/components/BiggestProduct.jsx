import React from 'react'
import PropTypes from 'prop-types'
import galactic from '../../public/img/galactic.jpeg'

function BiggestProduct({ title, description, price }) {
  return (
    <div className="biggest">
      <img src={galactic} alt="game" height="530px" />
      <div>
        <p>{title}</p>
        <h3>{description}</h3>
        <h4>{price}</h4>
      </div>
    </div>
  )
}

BiggestProduct.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}

export default BiggestProduct
