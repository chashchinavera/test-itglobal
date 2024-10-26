import Aside from "../Aside/Aside";
import Content from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";

const Main = (props) => {
  return (
    <div className={`main ${props.isOpen ? "main_fixed" : ""}`}>
      <Aside />
      <Sidebar />
      <Content onChange={props.onChange} />
    </div>
  );
};

export default Main;
