import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserImages, deleteUserImages } from "../../store/photostream";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const PhotoStream = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const pics = useSelector(state => state.userimages)
  // console.log('state userimages', pics)

  // Gets current user id:
  const sessionUserId = useSelector((state) => state.session.user.id);

  // console.log('sessionUser', sessionUser)
  useEffect(() => {
    dispatch(getUserImages(sessionUserId));
  }, [dispatch]);

  // makes user images obj an array:
  const userPics = useSelector((state) => {
    return Object.values(state.userimages);
  });

  // console.log('photos lol', userpics)

  // const userPics = userImages?.filter(image => image.userId === sessionUserId)
  // const userPics = userImages
  // console.log('HERE', userPics)

  // // To Do: Delete image:
  // const handleDelete = async (e) => {
  //   e.preventDefault();

  //   let deleteImage = await dispatch(deleteUserImages(userPics.id))

  //   // if (deleteImage) {
  //   //   history.push('/photostream')
  //   // }
  // }

  return (
    <div className="photostream-container">
      <div className="photos">
        {userPics?.map((image) => {
          return (
            <Link to={`/photo/${image.id}`}>
              <img src={image.imageUrl} key={image.id} alt="" />
              <span>{image?.description}</span>
              {/* <span className="delete-butt" onClick={handleDelete} >Delete</span> */}
            </Link>
          );
        })}
      </div>
      HELLO FROM PHOTOSTREAM!
    </div>
  );
};

export default PhotoStream;
