import React from 'react';
import { useSelector } from 'react-redux';

const RocketsPage = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  return (
    <div>
      <ul>
        {
          rockets.map((rocket) => (
            <li id={rocket.id} key={rocket.id}>
              {rocket.name}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default RocketsPage;
