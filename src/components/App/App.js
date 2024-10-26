import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWindow from "../ModalWindow/ModalWindow";
import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div className="app">
      <Header isOpen={isOpen}/>
      <Main onChange={handleOpen} isOpen={isOpen}/>
      <ModalWindow onClose={handleClose} isOpen={isOpen} />
    </div>
  );
};

export default App;
