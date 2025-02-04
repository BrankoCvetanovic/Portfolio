import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const circle = document.getElementById("circle") as HTMLElement;

document.addEventListener("mousemove", (e: MouseEvent) => {
  const height = circle.offsetHeight;
  const width = circle.offsetWidth;

  const target = e.target as HTMLElement;

  if (
    target.tagName === "A" ||
    target.tagName === "BUTTON" ||
    target.tagName === "path" ||
    target.tagName === "swg"
  ) {
    circle.classList.add("big");
  } else {
    circle.classList.remove("big");
  }

  setTimeout(() => {
    circle.style.left = `${e.clientX - width / 2}px`;
    circle.style.top = `${e.clientY - height / 2}px`;
  }, 20);
});

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <div className="footer"></div>
    </>
  );
}
