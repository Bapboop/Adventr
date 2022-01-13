import { csrfFetch } from "./csrf";
import { useSelector } from "react-redux";

//Action Types:
const GET_STREAM = 'photostream/getStream'


//Action creators:
const getStream = (images) => {
  return {
    type: GET_STREAM,
    images
  }
}

//Thunks:
export const getUserImages = (userId = null) => async (dispatch) => {
  const response = await csrfFetch('/api/photostream/'+userId);
  // const sessionUserId = useSelector(state => state.session.user.id)
  // console.log(userId)

 if (response.ok) {
   const allImages = await response.json();
   dispatch(getStream(allImages));
 }
};


// Reducer:
const photostreamReducer = (state = {}, action) => {
  let newState = {}
  console.log('ACTIONS HERE:', action.images)
  switch (action.type) {
    case GET_STREAM: {
      // const images = {};
      action.images.forEach(image => {
        newState[image.id] = image;
        // console.log('lol image', image)
      });
      return {
        ...newState,
        ...state,
      }
    }
    default: return state;
  }
}

export default photostreamReducer
