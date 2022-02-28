import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useState, FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator, State } from "../redux";



const Navbar: FunctionComponent = () => {

  const dispatch = useDispatch();

  const { openMenu } = bindActionCreators(actionCreator, dispatch);
  

  

  return (
    <header className="navbar">
      <div className="title">
        <Link to="/">
          <h1>Viens Transpirer</h1>
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <div className="link">
            <Link to="/">Evenements</Link>
            <span></span>
          </div>
          <div className="link">
            <Link to="/create-event">Créer ton evenement</Link>
            <span></span>
          </div>
          <div className="link">
            <Link to="/messages">Messages</Link>
            <span></span>
          </div>
          <div className="link">
            <Link to="/list-club">Listes des clubs</Link>
            <span></span>
          </div>
          <div className="link">
            <Link to="/">Déconnexion</Link>
            <span></span>
          </div>
        </ul>
      </nav>
      <div className="profil-connect">
        <Link className="desktop-profil" to="/profil">
          Clément
        </Link>
        <button onClick={() => openMenu()}  className="mobile-profil">
          C
        </button>
      </div>
    </header>
  );
};

export default Navbar;
