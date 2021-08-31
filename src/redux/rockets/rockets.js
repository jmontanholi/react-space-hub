import { GET_ROCKETS, GET_ROCKETS_SUCCESS, GET_ROCKETS_ERR } from '../slices/rocketsSlice';

const BOOK_ROCKET = 'SpaceHub/Rockets/BOOK_ROCKET';
const UNBOOK_ROCKET = 'SpaceHub/Rockets/UNBOOK_ROCKET';

const initialState = {
  rockets: [],
  loading: false,
  error: null,
};

const bookRocket = (payload) => ({
  type: BOOK_ROCKET,
  payload,
});

const unbookRocket = (payload) => ({
  type: UNBOOK_ROCKET,
  payload,
});

const populateRockets = (data) => {
  const arr = [];
  for (let i = 0; i < data.length; i += 1) {
    arr.push({
      id: data[i].id,
      name: data[i].rocket_name,
      type: data[i].rocket_type,
      description: data[i].description,
      flickr_images: data[i].flickr_images,
    });
  }
  return arr;
};

const bookedRocket = (state, id) => {
  const newState = state.map((rocket) => {
    if (rocket.id !== id) {
      return rocket;
    }
    return { ...rocket, reserved: true };
  });
  return newState;
};

const unbookedRocket = (state, id) => {
  const newState = state.map((rocket) => {
    if (rocket.id !== id) {
      return rocket;
    }
    return { ...rocket, reserved: false };
  });
  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return { ...state, loading: true };
    case GET_ROCKETS_SUCCESS:
      return { ...state, loading: false, rockets: populateRockets(action.data) };
    case GET_ROCKETS_ERR:
      return { ...state, loading: false, error: action.error };
    case BOOK_ROCKET:
      return { ...state, rockets: bookedRocket(state.rockets, action.payload) };
    case UNBOOK_ROCKET:
      return { ...state, rockets: unbookedRocket(state.rockets, action.payload) };
    default:
      return state;
  }
};

export { reducer as default, bookRocket, unbookRocket };
