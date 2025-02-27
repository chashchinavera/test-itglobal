import DateInput from "./DateInput";
import SearchInput from "./SearchInput";
import TagsInput from "./TagsInput";
import TextInput from "./TextInput";

const Input = ({ type, required, deletable, label, value, double }) => {
  if (type === "text")
    return (
      <TextInput
        required={required}
        label={label}
        value={value}
        double={double}
      />
    );
  if (type === "search")
    return <SearchInput label={label} value={value} double={double} />;
  if (type === "tags")
    return (
      <TagsInput
        deletable={deletable}
        label={label}
        value={value}
        double={double}
      />
    );
  if (type === "date") return <DateInput label={label} value={value} />;
};

export default Input;
