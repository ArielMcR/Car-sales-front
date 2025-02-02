import React from 'react';
import './Page-not-found.css';
import IMG from '../../imgs/imgs';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { NavLink } from 'react-router';
import home from '../../assets/home.svg';
export default function PageNotFound() {

    return (
        <>
            <Header />
            <div className="page-not-found">
                <p>Oops!</p>
                <img src={IMG.pagenotfound} alt="Page not found" />
                <h2>Parece que essa página não existe, <span> volte para tela inicial no botão abaixo</span></h2>
                <NavLink to="/" className="btn">
                    <img src={home} alt="Voltar para tela inicial" />
                </NavLink>
            </div>
            <Footer />
        </>
    )

}