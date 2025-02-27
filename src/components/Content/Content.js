import Form from "../Form/Form";
import { formData } from "../../utils/data";
import { useState, useEffect } from "react";

const Content = ({ onChange }) => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setIsScroll(true) : setIsScroll(false);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [isScroll]);

  return (
    <div className="content">
      <div
        className={`block__header content__header ${
          isScroll ? "content__shadow" : ""
        }`}
      >
        <div className="content__header_wrapper">
          <h3 className="content__header_task">Подзадача</h3>
          <button
            className="content__header_button"
            type="button"
            area-label="Создать"
            onClick={onChange}
          >
            Создать
          </button>
        </div>
        <div className="content__header_wrapper">
          <button className="content__header_button content__header_button_blue">
            Сохранить
          </button>
          <button className="content__header_button">Сохранить и выйти</button>
        </div>
      </div>

      <h2 className="block__title content__title">
        {formData.id} {formData.theme}
      </h2>

      <Form props={formData} isModal={false} />
    </div>
  );
};

export default Content;
