import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import style from './myProfile.module.css';
import { unbookRocket } from '../redux/rockets/rockets';
import { unreserveMission } from '../redux/missions/missions';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const filtered = rockets.filter((rocket) => rocket.reserved === true);
  const missions = useSelector((state) => state.missions.missions);
  const missionsFiltered = missions.filter((mission) => mission.reserved === true);
  const dispatch = useDispatch();
  const missionEmpty = missionsFiltered.length <= 0;
  const rocketsEmpty = filtered.length <= 0;

  return (
    <div className={style.div}>
      <section className={style.section}>
        <div className={style.missionsDiv}>
          <h3 className={style.missionsTitle}>Missions Joined</h3>
          <ul className={style.ul}>
            { missionEmpty
            && <li className={style.msg}>NO MISSIONS JOINED</li>}
            {missionsFiltered.map((mission) => (
              <li className={style.li} key={mission.id}>
                <h3 className={style.rocketName}>{mission.name}</h3>
                <div>
                  <Button variant="outline-info" className={style.rocketBtn}><a className={style.link} target="_blank" rel="noopener noreferrer" href={mission.wikiLink}>More Info</a></Button>
                  <Button variant="outline-secondary" className={style.rocketBtn} onClick={() => { dispatch(unreserveMission(mission.id)); }}>Leave Mission</Button>
                </div>
              </li>
            ))}

          </ul>
        </div>
        <div className={style.rocketsDiv}>
          <h3 className={style.rocketsTitle}>Rockets Reserved</h3>
          <ul className={style.ul}>
            {rocketsEmpty
            && <li className={style.msg}>NO ROCKETS RESERVED</li>}
            {
              filtered.map((rocket) => (
                <li className={style.li} key={rocket.id}>
                  <h3 className={style.rocketName}>{rocket.name}</h3>
                  <div>
                    <Button variant="outline-info" className={style.rocketBtn}><a className={style.link} target="_blank" rel="noopener noreferrer" href={rocket.wikiLink}>More Info</a></Button>
                    <Button variant="outline-secondary" className={style.rocketBtn} onClick={() => { dispatch(unbookRocket(rocket.id)); }}>Cancel reservation</Button>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    </div>
  );
};
export default MyProfile;
