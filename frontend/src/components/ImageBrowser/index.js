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

  console.log(images, "+++++IMAGES +++");

  return (
    <div className="browser-grid">
      <div className="browser-image">
        {images?.map((image) => (

            <div className='images'>
              <img src={image.imageUrl} key={image.id} alt="" />
              <p>{image?.description}  </p>
            </div>

))}

      </div>
    </div>
  );
};

export default ImageBrowser;
