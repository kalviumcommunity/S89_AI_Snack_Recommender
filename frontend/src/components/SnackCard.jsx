import React from 'react'

const SnackCard = ({snack}) => {
  return (
    <div>
        <h1>{snack.name}</h1>
        <p>{snack.description}</p>
    </div>
  )
}

export default SnackCard
