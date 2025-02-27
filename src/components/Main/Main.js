import Aside from "../Aside/Aside";
import Content from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";

const Main = ({ onChange,isOpen }) => {
  return (
    <div className={`main ${isOpen ? "main_fixed" : ""}`}>
      <Aside />
      <Sidebar />
      <Content onChange={onChange} />
    </div>
  );
};

export default Main;
