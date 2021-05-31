import React from 'react'
//Icons
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
// Navigation 
import { Link } from 'react-router-dom'


export const Home = () => {
  return (
    <>
      <div className="home-page">

        <section className="intro">
          <div>
            <h3>Welcome welcome</h3>
            <p>We are looking for nice homes for our fellow animal friends. And if you feel like you are interested in gaining a new friends and also sure that you can take care of an animal properly, wait no more. We are looking forward to your application. The dog pictures are provided from <a href="https://dog.ceo/dog-api/" target="_blank" rel="noreferrer">Dog API</a>. </p>
            <br />
            <Link to='/animals' className="intro-link"> I'd Love To Adopt One!</Link>
          </div>
          <img src={require('../images/Homedog.png').default} className="intro-image" alt="" />
        </section>

        <section className="process">

          <div className="process-images">
            <img className="process-image" src={require('../images/search.png').default} alt="" />
            <ArrowRightAltIcon className="process-icon" fontSize={'large'} />
            <img className="process-image" src={require('../images/form.png').default} alt="" />
            <ArrowRightAltIcon className="process-icon" fontSize={'large'} />
            <img className="process-image" src={require('../images/puppy.png').default} alt="" />
          </div>

          <div>
            <h4>Very Simple Process</h4>
            <div>1.Have a look at our animals who need a new home.</div>
            <div>2.Fill out and application and we connect you.</div>
            <div>3.Gain a new friend.</div>
          </div>

        </section>

        <section className="give-adoption">
          <div>
            <h3>Looking to find a new home for your fellow?</h3>
            <p>We understand that you might feel like giving your own pet for adoption for new people to be their friends one day. Of course we would prefer that you'd use our adoption service to make sure your pet will find a new home instead of leaving your friend to the streets all alone. We will <span className="r-bold-span">soon</span> start accepting pets from individual people.</p>
          </div>
          <img src="" alt="" />
        </section>
      </div>
    </>
  )
}
