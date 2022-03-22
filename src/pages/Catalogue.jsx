import React, { Component } from 'react';
import Produit from '../components/produit/Produit';

class Catalogue extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    produitChange(id, quantite){
        console.log("produit change dans catalogue", id, quantite);
    }
    render() { 
        return ( 
            <>
            <h1>Catalogue</h1>
            <section>
               {
                   this.props.produits.map((produit)=>{
                       return <Produit produit={produit} key={produit.id} produitChange={(id, quantite)=>this.produitChange(id, quantite)} />
                   })
               }
            </section>
            
            </>
         );
    }
}
 
export default Catalogue;