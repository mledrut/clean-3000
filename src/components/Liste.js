import React, { useState } from 'react'
import '../styles/App.scss';
import '../styles/Liste.scss';
import DisplayDate from './tools.js'
// import { AiFillDelete } from "react-icons/ai";

import data from './data.js'


const Liste = () => {

    const [avisList, setAvisList] = useState(data)

    const delAvis = (index) => {
        const copyAvisList = [...avisList]
        const findAvis = copyAvisList.find((item) => {
        return item.id === index
    })
    for (let i = 0; i < copyAvisList.length; i++) {
      if (copyAvisList[i].id === findAvis.id) {
        copyAvisList.splice(i, 1)
      }
    }
    setAvisList(copyAvisList)
    }

    const renderList = () => {

        return(
        avisList
        .sort((a, b) => a.id < b.id ? 1 : -1)
        .map(item => {
            return(
                <li key={item.id}>
                    <p>{DisplayDate(item.date)}</p>
                    <h4>{item.name}</h4>
                    <div className="observation">
                        <p className={`${item.observation? null : "no-observation"}`}
                        >{item.observation? item.observation : "Pas d'observation."}</p>
                    </div>
                    {/* <button onClick={() => delAvis(item.id)}><AiFillDelete /></button> */}
                </li>
            )
        })
        )
    }

  return (
    <div className='App'>
       <div className="container">
            <div className="page-title">
                <h2>Liste des avis de passage</h2>
            </div>
            <div className="content">
                <ul>
                    {renderList()}
                </ul>
            </div>
        </div> 
    </div>
  )
}

export default Liste