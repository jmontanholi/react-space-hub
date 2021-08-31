import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import style from './myProfile.module.css';
import { unbookRocket } from '../redux/rockets/rockets';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  return (
    <div className={style.div}>
      <section className={style.section}>
        <div className={style.missionsDiv}>
          <h3 className={style.missionsTitle}>Missions Joined</h3>
        </div>
        <div className={style.rocketsDiv}>
          <h3 className={style.rocketsTitle}>Rockets Reserved</h3>
          <ul className={style.ul}>
            {
              rockets.map((rocket) => {
                if (rocket.reserved) {
                  return (
                    <li className={style.li} key={rocket.id}>
                      <h3 className={style.rocketName}>{rocket.name}</h3>
                      { rocket.reserved
                      && <Button variant="outline-secondary" className={style.rocketBtn} onClick={() => { dispatch(unbookRocket(rocket.id)); }}>Cancel reservation</Button>}
                    </li>
                  );
                }
                return false;
              })
            }
          </ul>
        </div>
      </section>
    </div>
  );
};
export default MyProfile;
