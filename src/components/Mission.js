import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from './mission.module.css';
import { reservedMission } from '../redux/missions/missions';

const Mission = ({ id, name, description }) => {
  const dispatch = useDispatch();
  return (
    <tr className={style.row}>
      <td className={`${style.column} ${style.name}`}>{name}</td>
      <td className={`${style.column} ${style.dsc}`}>{description}</td>
      <td className={`${style.column} ${style.columnstatus}`}><p className={style.status}>NOT A MEMBER</p></td>
      <td className={`${style.column} ${style.columnbutton}`}>
        <button
          type="button"
          className={style.button}
          onClick={() => dispatch(reservedMission(id))}
        >
          Join Mission
        </button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Mission;
