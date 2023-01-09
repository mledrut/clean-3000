import React from 'react'
import '../styles/App.scss';
import '../styles/Liste.scss';

import data from './data.js'


const Liste = () => {
  return (
    <div className='App'>
       <div className="container">
            <div className="page-title">
                <h2>Liste des avis de passage</h2>
            </div>
            <div className="content">
                <ul>
                    {
                        data.map(item => {
                            return(
                                <li key={item.id}>
                                    <p>{item.date}</p>
                                    <h4>{item.name}</h4>
                                    <div className="observation">
                                        <p>{item.observation}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div> 
    </div>
  )
}

export default Liste