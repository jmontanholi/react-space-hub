import React from 'react';
import PropTypes from 'prop-types';
import style from './mission.module.css';

const Mission = ({ name, description }) => (
  <tr className={style.row}>
    <td className={`${style.column} ${style.name}`}>{name}</td>
    <td className={`${style.column} ${style.dsc}`}>{description}</td>
    <td className={`${style.column} ${style.columnstatus}`}><p className={style.status}>NOT A MEMBER</p></td>
    <td className={`${style.column} ${style.columnbutton}`}><button type="button" className={style.button}>Join Mission</button></td>
  </tr>
);

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
