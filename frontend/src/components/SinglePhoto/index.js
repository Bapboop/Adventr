import { useEffect, useState } from "react";
// import { getUserImages, deleteUserImages } from "../../store/photostream";
import { deleteUserImages } from "../../store/images";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { editImage } from "../../store/photostream";
import "./SinglePhoto.css";

const SinglePhoto = () => {
  const dispatch = useDispatch();
  const history = useHistory();


  const { photoId } = useParams();
  const sessionUserId = useSelector((state) => state.session.user.id);

  const userPics = useSelector((state) => state.userimages);
  const photo = useSelector((state) => state.userimages[photoId]);


  const [description, setDescription] = useState(photo?.description);
  const updateDescription = (e) => setDescription(e.target.value);

  const handleDelete = async () => {
    let deletedImage = await dispatch(deleteUserImages(photoId));

    history.push(`/photostream`);
  };

  // const textArea = () => {
  //   console.log('hi')
  //   document.getElementsByClassName('editBox').style.display = 'block'
  // }

  const handleUpdate = async () => {
    const payload = {
      photoId,
      description,
    };

    let updatedImage = await dispatch(editImage(payload));

    if (updatedImage) {
      history.push(`/photo/${photoId}`);
    }
  };

  return (
    <div>
      <div className="description1">
        <img className='actual-image' src={photo?.imageUrl} alt="" key={photoId ? photoId : ""} />
        <div className="description1-text">{photo?.description} {photo?.User?.session.username}</div>
        {photo?.userId === sessionUserId ? (
          <>
            <textarea
              className="editBox"
              value={description ? description : ""}
              onChange={updateDescription}
            />
            <div className='space' />
            <button className="edit-butt" onClick={handleUpdate}>
              Update
            </button>
            <div className='space' />
            <button className="delete-butt" onClick={handleDelete}>
              Delete
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SinglePhoto;
