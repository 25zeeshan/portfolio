import { useEffect, useState } from "react";
import "./Loader.css";

const Loader = () => {
  const [wait, setWait] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWait(false);
    }, 600);
  }, []);

  return (
    <div className="loader">
      {!wait && (
        <>
          <div>
            <div>
              <span className="one h6"></span>
              <span className="two h3"></span>
            </div>
          </div>

          <div>
            <div>
              <span className="one h1"></span>
              <span className="two h4"></span>
            </div>
          </div>

          <div>
            <div>
              <span className="one h5"></span>
              <span className="two h2"></span>
            </div>
          </div>
        </>
      )}

      <div className="text">Z</div>
    </div>
  );
};

export default Loader;
