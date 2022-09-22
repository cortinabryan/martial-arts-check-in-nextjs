import Image from "next/image";
import User from "../comps/User";
import ClassSched from "./ClassSched";
import BeltProgress from "./BeltProgress";
import ClassHistory from "./ClassHistory";
const Container = () => {
  return (
    <div class="container">
      <User />
      <ClassSched />
      <BeltProgress />
      <ClassHistory />
    </div>
  );
};

export default Container;
