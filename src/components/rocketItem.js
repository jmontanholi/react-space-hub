import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './rockets.module.css';
import { bookRocket, unbookRocket } from '../redux/rockets/rockets';

const RocketItem = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  return (
    <ul className={style.ul}>
      {
        rockets.map((rocket) => (
          <li className={style.li} key={rocket.id}>
            <div className={style.imgDiv}>
              <img className={style.img} src={rocket.flickr_images[0]} alt="spacecraft photograph" />
            </div>
            <div className={style.textDiv}>
              <h3 className={style.rocketName}>{rocket.name}</h3>
              <p className={style.description}>
                { rocket.reserved
                && <Badge className={style.badge} bg="info">Reserved</Badge>}
                {rocket.description}
              </p>
              { rocket.reserved
              && <Button variant="outline-secondary" onClick={() => { dispatch(unbookRocket(rocket.id)); }}>Cancel reservation</Button>}
              { !rocket.reserved
              && <Button variant="primary" onClick={() => { dispatch(bookRocket(rocket.id)); }}>Reserve Rocket</Button>}
            </div>
          </li>
        ))
      }
    </ul>
  );
};

export default RocketItem;
