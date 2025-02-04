import Project from "../components/Project";
import bt from "../asets/bettertwitter.png";
import boutech from "../asets/boutech.png";
import flags from "../asets/flags.png";
import homes from "../asets/homestyle.png";

const imageList = [homes, bt, boutech, flags];

export default function Projects() {
  return (
    <div className="projects">
      <h1 className="title big">Projects.</h1>
      <ul className="projects-container">
        {imageList.map((img, index) => (
          <Project key={index} img={img} />
        ))}
      </ul>
    </div>
  );
}
