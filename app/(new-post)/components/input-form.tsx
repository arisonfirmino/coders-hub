import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputFormProps {
  placeholder: string;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
}

const InputForm = ({ placeholder, register, error }: InputFormProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      {...register}
      className={`w-full rounded-xl border border-solid bg-transparent px-5 py-2.5 outline-none focus:ring-1 ${error ? "border-red-600 focus:ring-red-600" : "border-gray-400 focus:ring-white"}`}
    />
  );
};

export default InputForm;
