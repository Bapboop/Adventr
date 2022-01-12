import { csrfFetch } from "./csrf";

// Action types:
const LOAD_IMAGES = "images/loadImages";

// Action creators:
const loadImages = (images) => {
  return {
    type: LOAD_IMAGES,
    images
  };
};

// Thunk:
export const getImages = () => async (dispatch) => {
  const response = await csrfFetch('/api/images/');

  if (response.ok) {
    const images = await response.json();
    // console.log(images[0], "######## IMAGES");
    dispatch(loadImages(images));
    // return images
  }
};

// Reducer:

const imageReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case LOAD_IMAGES: {
      action.images.forEach((image) => {
        newState[image.id] = image;
      });
      return {
        ...newState,
        ...state,
      };
    }
    default:
      return state;
  }
};

export default imageReducer;
