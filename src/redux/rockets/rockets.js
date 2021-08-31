import { GET_ROCKETS, GET_ROCKETS_SUCCESS, GET_ROCKETS_ERR } from '../slices/rocketsSlice';

const initialState = {
  rockets: [],
  loading: false,
  error: null,
};

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return { ...state, loading: true };
    case GET_ROCKETS_SUCCESS:
      populateRockets(action.data);
      return { ...state, loading: false, rockets: populateRockets(action.data) };
    case GET_ROCKETS_ERR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
