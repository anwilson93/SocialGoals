import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import HomePage from "./components/HomePage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import CommentList from "./components/CommentList";
import ProfilePage from "./components/ProfilePage";
import CompletedGoals from "./components/CompletedGoals";
import MyDiaryEntries from "./components/MyDiaryEntries";
import LogoutPage from './components/LogoutPage';
import MyFollowersProfilePage from "./components/MyFollowersProfilePage";
import Following from "./components/MyFollowersProfilePage/Following";
import SearchPage from "./components/SearchPage";
import MyDiaryEntriesProfilePage from "./components/MyDiaryEntriesProfilePage";
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
        <Switch>
          <Route path='/logout-page' >
            <LogoutPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          {/* <Route exact path='/'>
            <HomePage />
            <CommentList />
          </Route> */}
          <Route exact path='/'>
            <LoginFormPage />
          </Route>
          <Route exact path="/goals">
            <ProfilePage />
          </Route>
          <Route exact path="/goals/completed">
            <CompletedGoals />
          </Route>
          <Route exact path='/diaries'>
            <MyDiaryEntriesProfilePage />
          </Route>
          <Route exact path="/followers">
            <MyFollowersProfilePage />
          </Route>
          <Route exact path="/following">
            <Following />
          </Route>
          <Route exact path='/feed'>
            <HomePage />
            <CommentList />
          </Route>
          <Route exact path='/search'>
            <SearchPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
