import React from 'react';
import useMission from '../redux/hooks/useMission';
import style from './mission.module.css';

const MissionsPage = () => {
  useMission();

  return (
    <div className="mission__container">
      <table className={style.table}>
        <thead>
          <tr className={style.row}>
            <th className={style.column}>Mission</th>
            <th className={style.column}>Description</th>
            <th className={style.column}>Status</th>
            <th className={style.column}>{' '}</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default MissionsPage;
