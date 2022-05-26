import Homepage from "./Homepage";
import Post from "../components/Post";
import { Routes, Route } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/posts/:id" element={<Post />} />
    </Routes>
  );
}

export default Pages;
