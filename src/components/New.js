import React, { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/App.scss';
import '../styles/New.scss';
import data from './data.js'



const Liste = () => {
  
  const navigate = useNavigate();

  useEffect(() => {
    const dayDate = new Date
    document.querySelector("#date").value = dayDate.toISOString().split('T')[0]
  }, [])
  

  const newAvis = (event) => {

    if (document.querySelector("#name").value !== "" && document.querySelector("#date").value !== ""){
      data.push({
        id: Date.now(),
        name: document.querySelector("#name").value,
        date: document.querySelector("#date").value,
        observation: document.querySelector("#observation").value,
      })
      // event.preventDefault()
      console.log(data)
      navigate('/liste')
      
    }

  }

  return (
    <div className='App'>
       <div className="container">
        <div className="page-title">
              <h2>Déposer un avis de passage</h2>
        </div>
        <div className="content">
          <form>
            <div className="form-box">
              <label htmlFor="name">Nom de l’entreprise ou du client *</label>
              <input type="text" name="name" id="name" required placeholder='(Requis)'></input>
            </div>
            <div className="form-box">
              <label htmlFor="date">Date d’intervention *</label>
              <input type="date" name="date" id="date" required></input>
            </div>
            <div className="form-box">
              <label htmlFor="observation">Observation</label>
              <textarea name="observation" id="observation" maxLength="240" placeholder='(Optionnel)'></textarea>
            </div>
            <button onClick={(e) => newAvis(e)}>Envoyer</button>
            {/* <input onClick={(e) => newAvis(e)} type="submit" value="Envoyer"></input> */}
          </form>
        </div>
      </div> 
    </div>
  )
}

export default Liste