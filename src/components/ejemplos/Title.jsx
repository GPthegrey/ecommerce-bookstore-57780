import React from 'react'

const Title = ({texto, numero, saludar}) => {

  // const { texto } = props

  return (
    <div>
      <p>{texto}</p>
      <p>{numero}</p>
      <button onClick={saludar}>Clickeame!</button>
    </div>
  )
}

export default Title
