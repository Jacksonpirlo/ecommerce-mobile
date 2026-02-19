import { TextInput } from "react-native";

const TextInputComponent = ({ style, placeHolder, onChange, value }: any) => {
  return (
    <TextInput
      onChange={onChange}
      placeholder={placeHolder}
      value={value}
      style={[style]}
    />
  );
};

export default TextInputComponent;
