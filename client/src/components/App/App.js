import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import "./App.scss";
import Login from "../../pages/Login/Login";
import Home from "../../pages/Home/Home";
import Main from "../Main/Main";
import Posts from "../../pages/Posts/Posts";
import tokenService from "../../services/tokenService";
import eventBus from "../../utils/eventBus";
import { Outlet } from "react-router";
import PostAdd from "../../pages/PostAdd/PostAdd";
import PostDetails from "../../pages/PostDetails/PostDetails";

function App() {
  const navigation = useNavigate();
  let payload = null;
  const token = tokenService.getToken();
  if (token) {
    payload = jwtDecode(tokenService.getToken());
  }

  useEffect(() => {
    eventBus.on("logout", () => {
      tokenService.removeToken();
      navigation("login");
    });

    return () => {
      eventBus.remove("logout");
    };
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="posts" element={<Outlet />}>
            <Route index element={<Posts />} />
            <Route path=":id" element={<PostDetails />} />
            <Route path="add" element={<PostAdd />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <div>
              <strong>404: </strong>
              Page not found
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
