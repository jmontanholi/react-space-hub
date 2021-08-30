const GET_ROCKETS = 'rockets/rocketslice/GET_ROCKETS';
const GET_ROCKETS_SUCCESS = 'rocket/rocketslice/GET_ROCKETS_SUCCESS';
const GET_ROCKETS_ERR = 'rocket/rocketslice/GET_ROCKETS_ERR';
const appUrl = 'https://api.spacexdata.com/v3/rockets';

const getRockets = () => async (dispatch) => {
  dispatch({ type: GET_ROCKETS });
  const response = await fetch(appUrl);
  const data = await response.json();
  return dispatch({ type: GET_ROCKETS_SUCCESS, data });
};

export {
  getRockets as default,
  GET_ROCKETS,
  GET_ROCKETS_SUCCESS,
  GET_ROCKETS_ERR,
};
