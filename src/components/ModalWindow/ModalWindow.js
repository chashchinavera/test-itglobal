import { formData } from "../../utils/data";
import Form from "../Form/Form";

const ModalWindow = ({ isOpen, onClose }) => {
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      onClose();
    }
  });

  if (isOpen) {
    document.querySelector(".modal").addEventListener("click", (event) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    });
  }

  return (
    <div className={`modal ${isOpen ? "modal_active" : ""}`}>
      <div className="modal__content">
        <div className="block__header modal__header">
          <h1 className="content__header_task">Подзадача</h1>
          <div className="modal__button-wrapper">
            <button
              className="content__header_button content__header_button_blue"
              type="button"
              area-label="Сохранить"
            >
              Сохранить
            </button>
            <button
              className="content__header_button"
              type="button"
              area-label="Отменить"
              onClick={onClose}
            >
              Отменить
            </button>
            <button
              className="modal__button_mobile modal__button_close"
              type="button"
              area-label="Закрыть"
              onClick={onClose}
            />
          </div>
        </div>

        <h2 className="block__title modal__title">Новая запись</h2>
        <Form props={formData} isModal={true} />
        <button
          className="modal__button_mobile modal__button content__header_button_blue"
          type="button"
        >
          Сохранить
        </button>
        <button
          className="modal__button_mobile modal__button"
          onClick={onClose}
          type="button"
        >
          Отменить
        </button>
      </div>
    </div>
  );
};

export default ModalWindow;
