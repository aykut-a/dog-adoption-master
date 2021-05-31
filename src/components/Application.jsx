import React from 'react'
import { useGlobalContext } from '../context'
//Icons
import CloseIcon from '@material-ui/icons/Close';

export const Application = () => {

  const { submitForm, cancelForm, nameInput, surnameInput, adressInput, emailInput, expInput, warning } = useGlobalContext()

  return (
    <div className="application-form">
      <div><CloseIcon onClick={cancelForm} className="close-button" /></div>
      <p>In order to make an offer to apply one of our wonderful animals, please fill out this application form.</p>
      <p ref={warning}>The areas marked (<span className="red-span">*</span>) must be filled out.</p>
      <div> <p>Name(<span className="red-span">*</span>)</p> <input ref={nameInput} type="text" />  </div>
      <div> <p> Surname(<span className="red-span">*</span>)</p><input ref={surnameInput} type="text" /> </div>
      <div> <p>Full Adress(<span className="red-span">*</span>)</p>  <input ref={adressInput} type="text" /> </div>
      <div> <p>E-Mail(<span className="red-span">*</span>)</p>  <input ref={emailInput} type="text" /> </div>
      <div className="exp-input">Have you ever taken care of a pet before? Please give details. <textarea ref={expInput} type="text" /></div>
      <button onClick={submitForm} className="submit-button">Submit Application</button>
    </div>
  )
}
