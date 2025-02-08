import { FC } from "react";

const Project: FC<{ img: string; info: string[]; name: string }> = ({
  img,
  info,
  name,
}) => {
  return (
    <div className="project">
      <img src={img} alt="" />
      <div className="project-info">
        <h1>{name}</h1>
        <ul>
          {info.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
      </div>
      <div className="project-shade"></div>
    </div>
  );
};

export default Project;
