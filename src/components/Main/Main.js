import Aside from "../Aside/Aside";
import Content from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";

const Main = () => {
  return (
    <div className="main">
      <Aside />
      <Sidebar />
      <Content />
    </div>
  );
};

export default Main;
