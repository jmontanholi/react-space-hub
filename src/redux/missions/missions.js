import {
  GET_MISSIONS, GET_MISSIONS_ERR, GET_MISSIONS_SUCCESS, RESERVED_MISSION, UNRESERVED_MISSION,
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
      wikiLink: data[i].wikipedia,
      reserved: false,
    });
  }
  return arr;
};

export const reserveMission = (payload) => (
  {
    type: RESERVED_MISSION,
    payload,
  }
);

export const unreserveMission = (payload) => (
  {
    type: UNRESERVED_MISSION,
    payload,
  }
);

const reservedMission = (state, id) => {
  const newState = state.map((mission) => {
    if (mission.id !== id) {
      return mission;
    }
    return { ...mission, reserved: true };
  });
  return newState;
};

const unreservedMission = (state, id) => {
  const newState = state.map((mission) => {
    if (mission.id !== id) {
      return mission;
    }
    return { ...mission, reserved: false };
  });
  return newState;
};

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
      return { ...state, missions: reservedMission(state.missions, action.payload) };
    case UNRESERVED_MISSION:
      return { ...state, missions: unreservedMission(state.missions, action.payload) };
    default:
      return state;
  }
};

export default reducer;
