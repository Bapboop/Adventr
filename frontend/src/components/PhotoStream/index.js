import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserImages, deleteUserImages } from "../../store/photostream";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const PhotoStream = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUserId = useSelector((state) => state.session.user.id);

  //
  useEffect(() => {
    dispatch(getUserImages(sessionUserId));
  }, [dispatch]);


  const userPics = useSelector((state) => {
    return Object.values(state.userimages);
  });



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

    </div>
  );
};

export default PhotoStream;
