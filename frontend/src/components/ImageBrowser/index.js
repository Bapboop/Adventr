import { getImages } from "../../store/images";
import { csrfFetch } from "../../store/csrf";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ImageBrowser.css";

const ImageBrowser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  const images = useSelector((state) => {
    return Object.values(state.images);
  });

  return (
    <>
      <div className="photos-container">
        <div>
          <h2 className='explore-stream'>Explore</h2>
        </div>
        <div className="photos-item">
          {images?.map((image) => (
            <div key={image.id} className="images">
              <img src={image.imageUrl} key={image.id} alt="" />
              {/* <p>{image?.description} </p> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageBrowser;
