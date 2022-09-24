import { useState } from 'react';
import './App.css';
import{ movies } from'./Data'; 
import Home from './Component/Home';
import ListHorreur from './Component/ListHorreur';
import ListDrame from './Component/ListDrame';
import ListEnfant from './Component/ListEnfant';
import ListAction from './Component/ListAction';
import Header from './Component/Header';
import Footer from './Component/footer';
import CustomNavbar from './Component/CustomNavbar';
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Details from './Component/Details'

function App() {
  const[Films,setFilms]=useState(movies);
  const[Caracter,setCaracter]=useState('');
  const[Rate,setRate]=useState(0);
  return (
    <div>
      <Header/>
      <CustomNavbar setCaracter={setCaracter} setRate={setRate}/>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}> </Route>
      <Route path="/action" element={<ListAction Films={Films} Caracter={Caracter} Rate={Rate} />}> </Route>
      <Route path="/horreur" element={<ListHorreur Films={Films} Caracter={Caracter} Rate={Rate} />}> </Route>
      <Route path="/drame" element={<ListDrame Films={Films} Caracter={Caracter} Rate={Rate} />}> </Route>
      <Route path="/enfant" element={<ListEnfant Films={Films} Caracter={Caracter} Rate={Rate} />}> </Route>
      <Route path="/Details/:id" element={<Details Films={Films}/>}> </Route>
    </Routes>
  </BrowserRouter>
  <Footer/>
    </div>
    );
}


export default App;