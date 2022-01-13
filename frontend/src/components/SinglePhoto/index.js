import { useEffect, useState } from "react";
import { getUserImages, deleteUserImages } from "../../store/photostream";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { editImage } from "../../store/photostream";

const SinglePhoto = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Each photo id:
  console.log(window.location.pathname);
  const pathname = window.location.pathname;
  const patharray = pathname.split("/");
  const photoId = parseInt(patharray[2]);

  const sessionUserId = useSelector((state) => state.session.user.id);
  console.log(sessionUserId, "###");
  const userPics = useSelector((state) => {
    console.log(state.userimages)
    return state.userimages;
  });
  // console.log(JSON.stringify(state.userimages));
  const photo = useSelector((state) => state.userimages[photoId]);
  console.log(photo, "**photo**");

  const [description, setDescription] = useState(photo?.description);
  const updateDescription = (e) => setDescription(e.target.value);

  const handleDelete = async () => {
    let deletedImage = await dispatch(deleteUserImages(photoId));
    history.push(`/photostream`);
  };

  const handleUpdate = async () => {
    const payload = {
      photoId,
      description,
    };

    let updatedImage = await dispatch(editImage(payload));

    if (updatedImage) {
      history.push(`/photostream`);
    }
  };

  return (
    <div>
      Hi from single photo!
      <img src={photo?.imageUrl} alt="" key={photoId ? photoId : ""} />
      <div>{photo?.description}</div>
      {photo?.userId === sessionUserId ? (
        <>
          <button className="delete-butt" onClick={handleDelete}>
            Delete
          </button>
          <textarea
            value={description ? description : ""}
            onChange={updateDescription}
          />
          <button className="edit-butt" onClick={handleUpdate}>
            Update
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SinglePhoto;
