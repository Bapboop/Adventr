import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SplashBackground from './components/SplashBackground';
import ImageBrowser from "./components/ImageBrowser";
import ImageCreate from "./components/ImageCreate";
import PhotoStream from "./components/PhotoStream";
import SinglePhoto from "./components/SinglePhoto";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path ='/'>
            <div className='slideshow'>
              <SplashBackground />
            </div>
            <Footer />
          </Route>
          <Route exact path='/images'>
            {/* <div> HELLO PHOTOS ROUTE</div> */}
            <ImageBrowser />
          </Route>
          <Route exact path='/images/new' >
            {/* HELLO IMAGE CREATER */}
            <ImageCreate />
          </Route>

          <Route exact path='/photostream'>
            <PhotoStream />
          </Route>

          <Route exact path='/photo/:photoId'>
            <SinglePhoto />
          </Route>

          {/* <Route path="/signup"> */}
            {/* <SignupFormPage /> */}
          {/* </Route> */}
        </Switch>
      )}
    </>
  );
}

export default App;
