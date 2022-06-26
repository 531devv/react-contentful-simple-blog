import Homepage from "./Homepage";
import Post from "../components/Post";
import { Routes, Route } from "react-router-dom";
import Category from "../components/Category";

function Pages() {
  return (
    <Routes>
      <Route
        path={`${process.env.REACT_APP_PRODUCTION_DIR}/`}
        element={<Homepage />}
      />
      <Route
        path={`${process.env.REACT_APP_PRODUCTION_DIR}/posts/:id`}
        element={<Post />}
      />
      <Route
        path={`${process.env.REACT_APP_PRODUCTION_DIR}/category/:slug`}
        element={<Category />}
      />
    </Routes>
  );
}

export default Pages;
