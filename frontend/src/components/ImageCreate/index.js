import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/";
import { createImage } from "../../store/images";

const ImageCreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');

  const updateImageUrl = (e) => setImageUrl(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);

  const sessionUser = useSelector(state => state.session.user)
  // console.log('#*#*#*#* sessionUser information:', sessionUser, '#*#*#*#*')

  // useEffect(() => {
  //   dispatch(createImage(newImage))
  // }, [dispatch])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userId: sessionUser.id,
      imageUrl,
      description
    }

    let createdImage = await dispatch(createImage(payload))
    // console.log('handle submit new image', createdImage)

    if (createdImage) {
      history.push(`/photostream`)
    }
  }


  return (
    <div className='image-create-container'>
      <h2>Share your adventure!</h2>
      <form onSubmit={handleSubmit} className='image-create-form'>
        <input
          type='text'
          placeholder='Image URL'
          required
          value={imageUrl}
          onChange={updateImageUrl}
        />
        <input
          type='textarea'
          placeholder='A description of your photo!'
          value={description}
          onChange={updateDescription}
        />
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ImageCreate;
