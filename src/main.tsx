import React from 'react';
import ReactDOM from 'react-dom/client';
import "keen-slider/keen-slider.min.css";
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx';
import './index.css';
import { Provider } from "react-redux";
import { store } from "./redux/store.ts"; 

// Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyADxJ2OowZvyVkvuI74Bp7F1xvk-yc-qQo",
  authDomain: "coffeshop-ba1fd.firebaseapp.com",
  projectId: "coffeshop-ba1fd",
  storageBucket: "coffeshop-ba1fd.firebasestorage.app",
  messagingSenderId: "715139519890",
  appId: "1:715139519890:web:6f149d3c4f9c0a29e0dd4b",
  measurementId: "G-PMRWZ643VV"
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
     {/* <- Envolvemos la app con el contexto */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
  </React.StrictMode>
);
