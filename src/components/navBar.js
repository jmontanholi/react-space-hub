/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../planet.png';
import style from './navBar.module.css';
import getRockets from '../redux/slices/rocketsSlice';
import useMission from '../redux/hooks/useMission';

const NavBar = () => {
  const dispatch = useDispatch();
  useMission();
  useEffect(() => {
    dispatch(getRockets());
  }, []);
  return (
    <nav className={style.nav}>
      <div className={style.logoDiv}>
        <img className={style.img} src={logo} alt="planet with two moons and a ring" />
        <h1 className={style.title}>Space Traveler's Hub</h1>
      </div>
      <div className={style.linkDiv}>
        <NavLink className={style.link} activeClassName={style.selected} to="/">Rockets</NavLink>
        <NavLink className={style.link} activeClassName={style.selected} to="/missions">Missions</NavLink>
        <NavLink className={`${style.link} ${style.profile}`} activeClassName={style.selected} to="/profile">My Profile</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
