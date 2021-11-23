import React from "react";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./galleryState";

function App() {
  const dispatch = useDispatch();
  const photos = useSelector(state => state.gallery.photos);
  // console.log("mytestphotos"+ photos)
  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  console.log("mytestphotos2"+ JSON.stringify(photos))

  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      <p>This is using Toolkit and Thunk.</p>
      <hr />
      <div className="Gallery">
        {photos.map(photo => (
          <img key={photo.id} src={photo.download_url} alt={photo.author} />
        ))}
      </div>
      <button>View more</button>
    </div>
  );
}

export default App;
