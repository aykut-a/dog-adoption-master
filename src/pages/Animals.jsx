import React from 'react'
import { IndividualAnimal } from '../components/IndividualAnimal'

export const Animals = ({ dogs, loading }) => {

  return (
    <div className="animals-page">
      {(loading ? 'laoding' :
        dogs.map((dog) => {
          return <IndividualAnimal dog={dog} key={dog[4]} id={dog[4]} />
        })
      )}
    </div>
  )
}


