import { csrfFetch } from "./csrf";
import { useSelector } from "react-redux";

//Action Types:
const GET_STREAM = "photostream/getStream";
const DELETE_PHOTO = "photostream/deletePhoto";
const LOAD_SINGLE = "photostream/getSingleImage";
const UPDATE_IMAGE = "photostream/updateImage";

//Action creators:
const getStream = (images) => {
  return {
    type: GET_STREAM,
    images,
  };
};

const deletePhoto = (removedPhoto) => {
  return {
    type: DELETE_PHOTO,
    removedPhoto,
  };
};

const getSingleImage = (image) => {
  return {
    LOAD_SINGLE,
    image,
  };
};

const updateImage = (image) => {
  return {
    type: UPDATE_IMAGE,
    image,
  };
};

//Thunks:
export const getUserImages =
  (userId = null) =>
  async (dispatch) => {
    const response = await csrfFetch(`/api/photostream/${userId}`);
    // const sessionUserId = useSelector(state => state.session.user.id)
    // console.log(userId)

    if (response.ok) {
      const allImages = await response.json();
      dispatch(getStream(allImages));
    }
  };

//get solo image
export const getSoloImages = (id) => async (dispatch) => {
  console.log("id from store photostream", id);
  const response = await csrfFetch(`/api/photostream/${id}/`);
  // const sessionUserId = useSelector(state => state.session.user.id)
  // console.log(userId)

  console.log("id from store photostream", id);
  const oneImage = await response.json();
  dispatch(getSingleImage(id));
  return oneImage;
};

export const deleteUserImages = (id) => async (dispatch) => {
  // const { photoId } = id
  const response = await csrfFetch(`/api/photostream/${id}`, {
    method: "DELETE",
    // body: JSON.stringify( id ),
  });

  if (response.ok) {
    const deletedImage = await response.json();
    // console.log(deletedImage, "test deleted image");
    dispatch(deletePhoto(deletedImage));
  }
};

export const editImage = (payload) => async (dispatch) => {
  const response = await csrfFetch(`/api/photostream/${payload.photoId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const updatedImage = await response.json();
  dispatch(updateImage(updatedImage));
  return updatedImage;
};

// Reducer:

const photostreamReducer = (state = {}, action) => {
  let newState = {};
  console.log("ACTIONS HERE:", action.userimages);
  switch (action.type) {
    case GET_STREAM: {
      action.images.forEach((image) => {
        newState[image.id] = image;
      });
      return {
        ...newState,
        ...state,
      };
    }
    case DELETE_PHOTO: {
      newState = { ...state };
      // console.log("FROM DELETE PHOTO ACTION", action);
      delete newState[action.removedPhoto];
      return newState;
    }
    case UPDATE_IMAGE: {
      return { ...state, [action.image.id]: action.image };
    }

    default:
      return state;
  }
};

export default photostreamReducer;
