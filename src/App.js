import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import Acceuil from './pages/Acceuil';
import Catalogue from './pages/Catalogue';
import Panier from './pages/Panier';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { produits: [] }
  }
    async componentDidMount(){
    const response = await fetch("datas/datas.json");
    const datas = await response.json();
    datas.map(prod => prod.quantite = 0);
    this.setState({ produits: datas });
 
  }
  produitChange(id, quantite){
   
    const produits = this.state.produits;
    produits.map((produit)=> {
      if(produit.id === id) {
        produit.quantite = quantite;
      }
      return produit;
    })
  this.setState({ produits: produits })
}
  render() { 
    const produitsPanier = this.state.produits.filter((produit) => produit.quantite !== 0);

    return ( 
   <BrowserRouter>
     <Header />
     <Routes>
      <Route path='/catalogue' element={<Catalogue produits={this.state.produits} produitChange={(id, quantite)=>this.produitChange(id, quantite)} />} />
      <Route path='/panier' element={<Panier produitsPanier={produitsPanier}/>} />
      <Route path='/' element={<Acceuil />} />
   
     </Routes>
   </BrowserRouter>
     );
  }
}
 
export default App;


