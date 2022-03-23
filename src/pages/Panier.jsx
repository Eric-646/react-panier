import React, { Component } from 'react';

class Panier extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        let total = 0;
        return (
            <>
                <h1>Panier</h1>
                <table className='tablePanier'>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Quantité</th>
                            <th>Prix</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.produitsPanier.map((produit) => {
                                total += (produit.quantite * produit.prix)
                                return (
                                    <tr>
                                        <td>{produit.nom}</td>
                                        <td>{produit.quantite}</td>
                                        <td>{produit.prix} €</td>
                                        <td>{(produit.quantite * produit.prix).toFixed(2)} €</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>Total</td>
                            <td>{total.toFixed(2)}</td>
                        </tr>
                    </tfoot>
                </table>



            </>
        );
    }
}

export default Panier;