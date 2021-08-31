const GET_MISSIONS = 'missions/missionSlice/GET_MISSIONS';
const GET_MISSIONS_SUCCESS = 'missions/missionSlice/GET_MISSIONS_SUCCESS';
const GET_MISSIONS_ERR = 'missions/missionSlice/GET_MISSIONS_ERR';
const RESERVED_MISSION = 'missions/missionSlice/RESERVED_MISSION';
const UNRESERVED_MISSION = 'missions/missionSlice/UNRESERVED_MISSION';
const appUrl = 'https://api.spacexdata.com/v3/missions';

const getMissions = () => async (dispatch) => {
  dispatch({ type: GET_MISSIONS });
  const response = await fetch(appUrl);
  const data = await response.json();
  return dispatch({ type: GET_MISSIONS_SUCCESS, data, status: 'fetched' });
};

export {
  getMissions as default,
  RESERVED_MISSION,
  UNRESERVED_MISSION,
  GET_MISSIONS,
  GET_MISSIONS_SUCCESS,
  GET_MISSIONS_ERR,
};
