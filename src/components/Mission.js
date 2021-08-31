import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from './mission.module.css';
import { reserveMission, unreserveMission } from '../redux/missions/missions';

const Mission = ({
  id, name, description, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <tr className={style.row}>
      <td className={`${style.column} ${style.name}`}>{name}</td>
      <td className={`${style.column} ${style.dsc}`}>{description}</td>
      <td className={`${style.column} ${style.columnstatus}`}>
        {reserved
        && <p className={style.statusActive}>Active Member</p>}
        {!reserved
        && <p className={style.status}>NOT A MEMBER</p>}
      </td>
      <td className={`${style.column} ${style.columnbutton}`}>
        {reserved
        && (
        <button
          type="button"
          className={style.buttonLeave}
          onClick={() => dispatch(unreserveMission(id))}
        >
          Leave Mission
        </button>
        )}
        {!reserved
        && (
        <button
          type="button"
          className={style.button}
          onClick={() => dispatch(reserveMission(id))}
        >
          Join Mission
        </button>
        )}
      </td>
    </tr>
  );
};

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Mission;
