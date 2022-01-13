import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserImages } from "../../store/photostream";



const PhotoStream = () => {

  const dispatch = useDispatch();
  // const pics = useSelector(state => state.userimages)
  // console.log('state userimages', pics)

  // Gets current user id:
  const sessionUserId = useSelector(state => state.session.user.id)
  // console.log('sessionUser', sessionUser)
  useEffect(() => {
    dispatch(getUserImages(sessionUserId));
  }, [dispatch])

  // makes user images obj an array:
  const userImages = useSelector((state) => {
    return Object.values(state.userimages);
  });

  // console.log('photos lol', userImages)

  // const userPics = userImages?.filter(image => image.userId === sessionUserId)
  const userPics = userImages
  // console.log('HERE', userPics)

  return (
    <div className="photostream-container">
      <div className="photos">
        {userPics?.map((image) => {
          return <img src={image.imageUrl} key={image.id} alt='' />;
        })}
      </div>
      HELLO FROM PHOTOSTREAM!
    </div>
  )
}



export default PhotoStream;
