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
  const sessionUserId = useSelector((state) => state.session.user.id);

  useEffect(() => {
    dispatch(getUserImages(sessionUserId));
  }, [dispatch]);


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
            <Link key={image.id} to={`/photo/${image.id}`}>
              <img src={image.imageUrl} key={image.id} alt="" />
              {/* <div className='description'>{image?.description}</div> */}
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
