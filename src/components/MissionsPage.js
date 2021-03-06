import React from 'react';
import { useSelector } from 'react-redux';
import Mission from './Mission';
import style from './missionpage.module.css';
import useMission from '../redux/hooks/useMission';

const MissionsPage = () => {
  const { missions } = useSelector((state) => state.missions);
  const { status } = useSelector((state) => state.missions);

  useMission(status);

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
            <Mission
              key={mission.id}
              id={mission.id}
              name={mission.name}
              description={mission.description}
              reserved={mission.reserved}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsPage;
