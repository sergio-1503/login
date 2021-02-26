/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className='Container'>
    <div class='jumbotron mt-5'>
      <h1 class="display-4">Bienvenido a Auth System</h1>
      <p class='lead'>Este es un increíble sistema de autenticación con características de nivel de producción</p>
      <hr class='my-4' />
      <p>Haga clic en el botón Iniciar sesión</p>
      <p class='lead'>
        <Link class='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
      </p>
    </div>
  </div>
);

export default Home;