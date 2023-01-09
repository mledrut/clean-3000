import React from 'react'
import '../styles/App.scss';
import '../styles/New.scss';


const Liste = () => {
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
              <textarea name="observation" id="observation" maxlength="240" placeholder='(Optionnel)'></textarea>
            </div>
            <input type="submit" value="Envoyer"></input>
          </form>
        </div>
      </div> 
    </div>
  )
}

export default Liste