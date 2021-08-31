import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getMissions from '../slices/missionSlice';

const useMission = (status) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (status !== 'fetched') {
      dispatch(getMissions());
    }
  }, []);
};

export default useMission;
