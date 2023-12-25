import { useState, useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader";
import Navigation from "./components/Navigation";
import Home from "./components/Home";

function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInitialLoading(false);
    }, 3200);
  });

  return (
    <>
      {initialLoading && <Loader />}
      {!initialLoading && (
        <div>
          <Navigation />
          <Home />
        </div>
      )}
    </>
  );
}

export default App;
