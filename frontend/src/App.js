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
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
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
            <MyDiaryEntries />
          </Route>
          <Route exact path='/feed'>
            <HomePage />
            <CommentList />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
