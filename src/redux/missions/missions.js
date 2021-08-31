import {
  GET_MISSIONS, GET_MISSIONS_ERR, GET_MISSIONS_SUCCESS, RESERVED_MISSION,
} from '../slices/missionSlice';

const initialState = {
  missions: [],
  status: 'fetching',
  loading: false,
  error: null,
};

const populateMissions = (data) => {
  const arr = [];
  for (let i = 0; i < data.length; i += 1) {
    arr.push({
      id: data[i].mission_id,
      name: data[i].mission_name,
      description: data[i].description,
    });
  }
  return arr;
};

export const reservedMission = (payload) => (
  {
    type: RESERVED_MISSION,
    payload,
  }
);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return { ...state, loading: true };
    case GET_MISSIONS_SUCCESS:
      populateMissions(action.data);
      return {
        ...state,
        loading: false,
        missions: populateMissions(action.data),
        status: action.status,
      };
    case GET_MISSIONS_ERR:
      return { ...state, loading: false, error: action.error };
    case RESERVED_MISSION:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
