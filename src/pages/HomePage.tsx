import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
  const [isActiveArrow, setActiveArrow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveArrow((prev) => !prev);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <h4>Hi, my name is</h4>
      <h1 className="name">Branko Cvetanović.</h1>
      <h1 className="title">I am web developer.</h1>
      <p>
        I am a passionate and dedicated front-end developer with a strong desire
        to create beautiful and functional web applications. I am constantly
        learning and experimenting with new technologies to improve my skills. I
        spend my days creating <Link to={"/projects"}>projects</Link> that bring
        ideas to life, focusing on delivering interactive and visually appealing
        web experiences.
      </p>
      <Link to="/contact" className="arrow-container">
        Contact me
        <span className={isActiveArrow ? "arrow arrow-active" : "arrow"}>
          &#8594;
        </span>
      </Link>
    </div>
  );
}
