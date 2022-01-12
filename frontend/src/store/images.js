import { csrfFetch } from "./csrf";

// Action types:
const LOAD_IMAGES = "images/loadImages";
const CREATE_IMAGE = "images/createImage"

// Action creators:
const loadImages = (images) => {
  return {
    type: LOAD_IMAGES,
    images
  };
};

const addImage = (newImage) => {
  return {
    type: CREATE_IMAGE,
    newImage
  };
};

// Thunk:
// Get all images:
export const getImages = () => async (dispatch) => {
  const response = await csrfFetch('/api/images');

  if (response.ok) {
    const images = await response.json();
    console.log(images[0], "######## IMAGES");
    dispatch(loadImages(images));
  }
};

export const createImage = (payload) => async dispatch => {
  const response = await csrfFetch(`/api/images`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  });

  const newImage = await response.json();
  dispatch(addImage(newImage))
  return newImage;

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
    case CREATE_IMAGE: {
      const newState = {
        ...state,
        [action.newImage.id]: action.newImage
      }
      return newState;
    }
    default:
      return state;
  }
};

export default imageReducer;
