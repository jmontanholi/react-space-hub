import React from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './rockets.module.css';

const RocketItem = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

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
                {rocket.description}
              </p>
              <Button variant="primary">Reserve Rocket</Button>
            </div>
          </li>
        ))
      }
    </ul>
  );
};

export default RocketItem;
