import { useState } from "react";
import arrowBack from "../../assets/images/arrow-back.svg";
import "./index.scss";

function Collapse({ title, content }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <article
      className={`collapse__container ${isCollapsed ? "collapsed" : ""}`}
    >
      <div
        className="collapse__title"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <p>{title}</p>
        <img className="collapse__toggle" src={arrowBack} alt="Chevron" />
      </div>
      <div className="collapse__content">
        <p className="collapse__paragraph">{content}</p>
      </div>
    </article>
  );
}

export default Collapse;
