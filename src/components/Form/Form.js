import Input from "../Inputs/Input.js";

const Form = (props) => {
  return (
    <form className="form">
      <Input
        type={"text"}
        required={true}
        deletable={false}
        label={"Тема"}
        value={props.props.theme}
        double={false}
      />
      <Input
        type={"text"}
        required={false}
        deletable={false}
        label={"Статус"}
        value={props.props.status}
        double={false}
      />
      <Input
        type={"text"}
        required={false}
        deletable={false}
        label={"Описание"}
        value={props.props.description}
        double={false}
      />
      <Input
        type={"search"}
        required={false}
        deletable={false}
        label={"Продукт"}
        value={props.props.product}
        double={false}
      />
      <Input
        type={"text"}
        required={true}
        deletable={false}
        label={"Рабочие заметки"}
        value={props.props.notes}
        double={false}
      />
      <Input
        type={"text"}
        required={false}
        deletable={false}
        label={"Приоритет"}
        value={props.props.prioriry}
        double={false}
      />
      <Input
        type={"tags"}
        required={false}
        deletable={false}
        label={"Ответственный"}
        value={props.props.leads}
        double={false}
      />
      <Input
        type={"tags"}
        required={false}
        deletable={false}
        label={"Группа"}
        value={props.props.groups}
        double={false}
      />
      <Input
        type={"text"}
        required={false}
        deletable={false}
        label={"Комментарии"}
        value={props.props.comments}
        double={true && !props.isModal}
      />
      <Input
        type={"tags"}
        required={false}
        deletable={true}
        label={"Согласующие"}
        value={props.props.assignee}
        double={true && !props.isModal}
      />
      <Input
        type={"date"}
        required={false}
        deletable={false}
        label={"Когда открыто"}
        value={props.props.openDate}
        double={false}
      />
      <Input
        type={"date"}
        required={false}
        deletable={false}
        label={"Когда создано"}
        value={props.props.createDate}
        double={false}
      />
      <Input
        type={"tags"}
        required={false}
        deletable={false}
        label={"Кем открыто"}
        value={props.props.whoOpened}
        double={false}
      />
      <Input
        type={"tags"}
        required={false}
        deletable={false}
        label={"Кем создано"}
        value={props.props.whoCreated}
        double={false}
      />
    </form>
  );
};

export default Form;
