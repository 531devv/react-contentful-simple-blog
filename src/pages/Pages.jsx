import Homepage from "./Homepage";
import Post from "../components/Post";
import { Routes, Route } from "react-router-dom";
import Category from "../components/Category";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/posts/:id" element={<Post />} />
      <Route path="/category/:slug" element={<Category />} />
    </Routes>
  );
}

export default Pages;
