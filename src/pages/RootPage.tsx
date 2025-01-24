import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

export default function Root() {
  return (
    <>
      <AnimatedCursor
        color="255, 255, 255"
        outerSize={60}
        outerStyle={{
          backgroundColor: "transparent",
          border: "2px solid white",
        }}
        outerScale={2}
      />
      <Header />
      <Outlet />
    </>
  );
}
