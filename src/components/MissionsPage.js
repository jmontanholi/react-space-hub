import React from 'react';
import style from './missionpage.module.css';

const MissionsPage = () => {
  const missions = [];

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
        <tbody>
          {missions.map((mission) => (
            <tr className={style.row} key={mission.id}>
              <td className={style.column}>{mission.name}</td>
              <td className={style.column}>{mission.description}</td>
              <td className={style.column}><button type="button">NOT A MEMBER</button></td>
              <td className={style.column}><button type="button">Join Mission</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsPage;
