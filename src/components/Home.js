import React from 'react'
import Carrusel from './Carrusel'
import './Home.css'


export default function Home(props) {
  const { actualUser } = props;

  const googleSignin = e => {
    e.preventDefault();
    props.googleSignin();
  }

  return (
    <div>
      <Carrusel />
      <br />
      {actualUser ?
        null
        : <button onClick={googleSignin} className="btn btn-info btn-block ">Ingresa con google</button>
      }
      {actualUser ?
        null
        : <button className="btn btn-primary btn-block ">Ingresa con facebook</button>
      }

      <div className="principal">
        <i className="material-icons">restaurant</i>
        <i className="material-icons">local_florist</i>
        <i className="material-icons">set_meal</i>
        <i className="material-icons">plumbing</i>
        <i className="material-icons">local_shipping</i>
        <i className="material-icons">storefront</i>
        <i className="material-icons">spa</i>
        <i className="material-icons">checkroom</i>
        <i className="material-icons">home</i>
        <i className="material-icons">home</i>
        <i className="material-icons">home</i>
        <i className="material-icons">home</i>
      </div>
    </div>
  )
}
