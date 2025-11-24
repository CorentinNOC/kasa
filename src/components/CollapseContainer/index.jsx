import Collapse from "../Collapse";
import "./index.scss";

function CollapseContainer({ data, col = 1 }) {
  return (
    <section className={`collapse__wrapper col-${col}`}>
      {data.map((item, index) => (
        <Collapse key={index} title={item.title} content={item.description} />
      ))}
    </section>
  );
}

export default CollapseContainer;
