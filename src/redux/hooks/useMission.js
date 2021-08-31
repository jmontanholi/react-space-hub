import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getMissions from '../slices/missionSlice';

const useMission = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
};

export default useMission;
