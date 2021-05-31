import React from 'react'

export const About = () => {
  return (
    <div className="about-page">
      <img src={require('../images/aboutimg.jpg').default} alt="" className="about-image" />
      <div>
        <h3>About</h3> <br />
        <p>We were founded in 2015. Our mission is very simple. We want better treatment of animals and make sure the adopters and the animals are both happy about living with one another. We are also actively improving our screening process before we accept the possible adoptors' aplications.</p>

        <p>We are indeed aware that taking care of an animal is not an easy job, which is why we make sure the person who will adopt the animal is serious with this intention and can indeed take care of an animal. We kindly ask all our adoptors to consider twice before making a quick decision to prevent further hardships for the animal and the adoptor.</p>
      </div>
    </div>
  )
}
