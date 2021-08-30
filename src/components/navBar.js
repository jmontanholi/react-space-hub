/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../planet.png';
import style from './navBar.module.css';

const NavBar = () => (
  <nav className={style.nav}>
    <div className={style.logoDiv}>
      <img className={style.img} src={logo} alt="planet with two moons and a ring" />
      <h1 className={style.title}>Space Traveler's Hub</h1>
    </div>
    <div className={style.linkDiv}>
      <NavLink className={style.link} exact activeClassName={style.selected} to="/">Rockets</NavLink>
      <NavLink className={style.link} exact activeClassName={style.selected} to="/missions">Missions</NavLink>
      <NavLink className={`${style.link} ${style.profile}`} exact activeClassName={style.selected} to="/profile">My Profile</NavLink>
    </div>
  </nav>
);

export default NavBar;
