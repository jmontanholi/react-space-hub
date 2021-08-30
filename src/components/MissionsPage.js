import React from 'react';
import style from './mission.module.css';

const MissionsPage = () => (
  <div className="mission__container">
    <table className={style.table}>
      <tr className={style.row}>
        <th className={style.column}>Mission</th>
        <th className={style.column}>Description</th>
        <th className={style.column}>Status</th>
        <th className={style.column}>{' '}</th>
      </tr>
    </table>
  </div>
);

export default MissionsPage;
