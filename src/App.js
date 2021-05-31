import React, { useEffect, useState } from 'react'
// Components
import { Header } from './components/Header'
import { Application } from './components/Application'
import { useGlobalContext } from './context'
// Pages
import { Home } from './pages/Home'
import { Animals } from './pages/Animals'
import { About } from './pages/About'
import { Error } from './pages/Error'
// Icons
import CopyrightIcon from '@material-ui/icons/Copyright';
// Axios 
import axios from 'axios'
// Router
import { HashRouter, Route, Switch } from "react-router-dom";
// Styling
import './App.css'
// Names and Ages
import { namesAges } from './components/data'

function App() {

  const [loading, setLoading] = useState(false)
  const [dogs, setDogs] = useState([])
  const [error, setError] = useState(false)

  const { applicationOpen } = useGlobalContext()

  useEffect(() => {
    setLoading(true)
    setError(false)
    axios({
      method: 'GET',
      url: 'https://dog.ceo/api/breeds/image/random/50'
    }).then(res => {
      let newDogs = []
      res.data.message.forEach((item) => {
        let dog = []
        let image = item.toString()
        let index = res.data.message.indexOf(item)
        let name = namesAges[index].namen
        let age = namesAges[index].age
        let breed = item.split('/')[4].replace('-', ' ')
        dog.push(image, name, age, breed, index)
        newDogs.push(dog)
      })
      setDogs(newDogs)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
  }, [])

  return (
    <div className="container">
      <HashRouter basename="/">
        <Header />
        <div className="overlay" style={applicationOpen ? { display: 'flex' } : { display: 'none' }}><Application /></div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/animals">
            <Animals loading={loading} dogs={dogs} />
            {error ? <p>Sorry there was an error loading the data</p> : ''}
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="">
            <Error />
          </Route>
        </Switch>
        <div className="footer">
          <CopyrightIcon /> 2021 <span className="r-bold-span">Pet Adoption</span> All rights reserved.
      </div>
      </HashRouter>
    </div>
  );
}

export default App;
