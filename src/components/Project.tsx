import { FC } from "react";

const Project: FC<{ img: string }> = ({ img }) => {
  return (
    <div className="project">
      <img src={img} alt="" />
    </div>
  );
};

export default Project;
