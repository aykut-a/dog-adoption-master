import React from 'react'
import { useGlobalContext } from '../context'

export const IndividualAnimal = ({ dog, id }) => {

  const { openForm, applicationsSent } = useGlobalContext()

  return (
    <div className="individual-animal">
      <div className="image-container">
        <img src={dog[0]} alt='Dog' />
      </div>
      <div className="dog-info">
        <p>Name: {dog[1]}</p>
        <p>Age: {dog[2]}</p>
        <p className="breed-info">Breed: {dog[3]}</p>
        {applicationsSent.includes(id) ? <div className="application-sent">Applied</div> : <button onClick={() => { openForm(id) }} className="adopt-button">Adopt</button>}
      </div>
    </div>
  )
}
