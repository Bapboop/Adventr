import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserImages} from "../../store/photostream";
import { deleteUserImages } from "../../store/images";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./PhotoStream.css";
// import * as session from '../../store/session'

const PhotoStream = () => {
  const dispatch = useDispatch();
  // const history = useHistory();

  useEffect(() => {
    dispatch(getUserImages(sessionUserId));
  }, [dispatch]);

  const sessionUserId = useSelector((state) => state.session.user.id);


  const userPics = useSelector((state) => {
    return Object.values(state.userimages);
  });



  return (
    <div className="photos-container">
      <div>
      <h2 className='stream'> Photostream</h2>

      </div>
      <div className="photos-item">
        {userPics?.map((image) => {
          return (
            <Link to={`/photo/${image.id}`}>
              <img src={image.imageUrl} key={image.id} alt="" />
              <span className='description'>{image?.description}</span>
              {/* <span className="delete-butt" onClick={handleDelete} >Delete</span> */}
            </Link>
          );
        })}
      </div>
    </div>

    // </div>
  );
};

export default PhotoStream;
