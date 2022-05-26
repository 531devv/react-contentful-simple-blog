import { useState, useEffect } from "react";
import useContentful from "./components/useContentful";

function App() {
  const [data, setData] = useState({});
  const { getPosts } = useContentful();
  useEffect(() => {
    getPosts().then((response) => setData(response));
  }, []);
  return <div className="App"></div>;
}

export default App;
