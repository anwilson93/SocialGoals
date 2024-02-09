import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import HomePage from "./components/HomePage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
// import CommentList from "./components/CommentList";
import MyGoalsProfilePage from "./components/MyGoalsProfilePage";
import MyCompletedGoals from "./components/MyGoalsProfilePage/MyCompletedGoals";
import LogoutPage from './components/LogoutPage';
import MyFollowersProfilePage from "./components/MyFollowersProfilePage";
import Following from "./components/MyFollowersProfilePage/Following";
import SearchPage from "./components/SearchPage";
import MyDiaryEntriesProfilePage from "./components/MyDiaryEntriesProfilePage";
import LandingPageJumbotron from "./components/LandingPageJumbotron";
// import LoginForm from "./components/LoginFormModal/LoginForm";


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
        <Routes>
          <Route path='/logout-page' element={<LogoutPage />} />
          <Route path="/signup" element={<SignupFormPage />} />
          {/* <Route exact path='/'>
            <HomePage />
            <CommentList />
          </Route> */}
          <Route exact path='/' element={<LandingPageJumbotron />} />
          <Route exact path="/goals" element={<MyGoalsProfilePage />} />
          <Route exact path="/goals/completed" element={<MyCompletedGoals />} />
          <Route exact path='/diaries' element={<MyDiaryEntriesProfilePage />} />
          <Route exact path="/followers" element={<MyFollowersProfilePage />} />
          <Route exact path="/following" element={<Following />} />
          <Route exact path='/feed' element={<HomePage />} />
          {/* <Route exact path='/feed' >
            <HomePage />
            <CommentList />
          </Route> */}
          <Route exact path='/search' element={<SearchPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
