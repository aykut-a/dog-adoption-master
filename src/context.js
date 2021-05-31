import React, { useContext, useState, useRef } from 'react'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [applicationOpen, setApplicationOpen] = useState(false)
  const [currentlyApplying, setCurrentlyApplying] = useState('')
  const [applicationsSent, setApplicationsSent] = useState([])

  const nameInput = useRef(null)
  const surnameInput = useRef(null)
  const adressInput = useRef(null)
  const emailInput = useRef(null)
  const expInput = useRef(null)

  const warning = useRef(null)

  const resetInputs = () => {
    nameInput.current.value = ''
    surnameInput.current.value = ''
    adressInput.current.value = ''
    emailInput.current.value = ''
    expInput.current.value = ''
  }

  const openForm = (key) => {
    setApplicationOpen(true)
    setCurrentlyApplying(key)
    resetInputs()
  }

  const submitForm = () => {
    // Are all the areas filled? 
    if (nameInput.current.value.trim('') === '' ||
      surnameInput.current.value.trim('') === '' ||
      adressInput.current.value.trim('') === '' ||
      emailInput.current.value.trim('') === '') {
      warning.current.style.animation = 'pulse 300ms'
      setTimeout(() => { warning.current.style.animation = '' }, 300)
      return
    }
    setApplicationsSent(applicationsSent => [...applicationsSent, currentlyApplying])
    setApplicationOpen(false)
    setCurrentlyApplying('')
  }

  const cancelForm = () => {
    setApplicationOpen(false)
    setCurrentlyApplying('')
  }

  const overlay = useRef(null)

  return (
    <AppContext.Provider
      value={{ applicationOpen, submitForm, cancelForm, openForm, overlay, nameInput, surnameInput, adressInput, emailInput, expInput, warning, applicationsSent }}>
      {children}
    </AppContext.Provider>
  )

}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }