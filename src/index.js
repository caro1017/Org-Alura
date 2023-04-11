import React from 'react'; // libreria interfaz grafica
import ReactDOM from 'react-dom/client'; // Ayuda a trabajar react con el DOM
import './index.css'; // Importamos los estilos para el index
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render/* recibir etiquetas */(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
