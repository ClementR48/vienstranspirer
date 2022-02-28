import { FunctionComponent, useEffect, useState } from 'react';
import './Menu.scss';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator, State } from "../redux";
import { bindActionCreators } from 'redux';

const Menu: FunctionComponent = () => {

  const state = useSelector((state:State) => state.global)

  const dispatch = useDispatch();

  const { openMenu } = bindActionCreators(actionCreator, dispatch);

  return (
    <nav className={state.openMenu ? 'menu menu-open': 'menu'}>
      
        <ul>
          <div className="link">
            <Link onClick={() => openMenu()} to="/">Evenements</Link>
            <span></span>
          </div>
          <div className="link">
            <Link onClick={() => openMenu()} to="/create-event">Créer ton evenement</Link>
            <span></span>
          </div>
          <div className="link">
            <Link onClick={() => openMenu()} to="/messages">Messages</Link>
            <span></span>
          </div>
          <div className="link">
            <Link onClick={() => openMenu()} to="/list-club">Listes des clubs</Link>
            <span></span>
          </div>
          <div className="link">
            <Link onClick={() => openMenu()} to="/profil">Profil</Link>
            <span></span>
          </div>
          <div className="link">
            <Link onClick={() => openMenu()} to="/">Déconnexion</Link>
            <span></span>
          </div>
        </ul>
      
    </nav>
  );
};

export default Menu;