import { useState } from "react";
import arrowBack from "../../assets/images/arrow-back.svg";
import style from "./Collapse.module.scss";

function Collapse({ title, content }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <article
      className={`${style.container} ${isCollapsed ? style.collapsed : ""}`}
    >
      <div className={style.title} onClick={() => setIsCollapsed(!isCollapsed)}>
        <p>{title}</p>
        <img className={style.toggle} src={arrowBack} alt="Chevron" />
      </div>
      <div className={style.content}>
        {typeof content === "string" ? (
          <p className={style.paragraph}>{content}</p>
        ) : (
          content
        )}
      </div>
    </article>
  );
}

export default Collapse;
