import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface TextareaFormProps {
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
}

const TextareaForm = ({ register, error }: TextareaFormProps) => {
  return (
    <textarea
      rows={2}
      placeholder="Descriçao do projeto"
      {...register}
      className={`w-full resize-none rounded-xl border border-solid bg-transparent px-5 py-2.5 outline-none focus:ring-1 ${error ? "border-red-600 focus:ring-red-600" : "border-gray-400 focus:ring-white"}`}
    ></textarea>
  );
};

export default TextareaForm;
