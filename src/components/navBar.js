/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import logo from '../planet.png';
import style from './navBar.module.css';

const NavBar = () => (
  <nav className={style.nav}>
    <div className={style.logoDiv}>
      <img className={style.img} src={logo} alt="planet with two moons and a ring" />
      <h1 className={style.title}>Space Traveler's Hub</h1>
    </div>
    <div className={style.linkDiv}>
      <a className={style.link} href="a">Rockets</a>
      <a className={style.link} href="a">Missions</a>
      <a className={`${style.link} ${style.profile}`} href="a">My Profile</a>
    </div>
  </nav>
);

export default NavBar;
