import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  NotFound,
  Login,
  Signup,
  NotFound,
  Login,
  Signup,
  Rules,
  Profile,
  Quiz,
  Results,
} from "./containers";
import { Message, PrivateRoute, RestrictedRoute } from "./components";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Message />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route element={<PrivateRoute />}>
            <Route path="/rules/:quizId" element={<Rules />} />
            <Route path="/quiz/:quizId" element={<Quiz />} />
            <Route path="/results/:quizId" element={<Results />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
        <Route element={<RestrictedRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
