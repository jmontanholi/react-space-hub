import React from 'react';
import { useSelector } from 'react-redux';
import Mission from './Mission';
import style from './missionpage.module.css';

const MissionsPage = () => {
  const missions = useSelector((state) => state.missions.missions);

  return (
    <div className="mission__container">
      <table className={style.table}>
        <thead>
          <tr>
            <th className={`${style.column} ${style.head}`}>Mission</th>
            <th className={`${style.column} ${style.head}`}>Description</th>
            <th className={`${style.column} ${style.head}`}>Status</th>
            <th className={`${style.column} ${style.head}`}>{' '}</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission key={mission.id} name={mission.name} description={mission.description} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsPage;
