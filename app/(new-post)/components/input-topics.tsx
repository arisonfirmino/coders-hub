"use client";

import { useState } from "react";
import { PlusCircleIcon } from "lucide-react";

interface InputTopicsProps {
  placeholder: string;
  isLoading: boolean;
  onAddTopic: (topic: string) => void;
}

const InputTopics = ({
  placeholder,
  onAddTopic,
  isLoading,
}: InputTopicsProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTopic = () => {
    if (inputValue.trim()) {
      onAddTopic(inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTopic();
    }
  };

  return (
    <div className="flex gap-5">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full rounded-xl border border-solid border-gray-400 bg-transparent px-5 py-2.5 outline-none focus:ring-1 focus:ring-white"
      />
      <button
        disabled={isLoading}
        type="button"
        onClick={handleAddTopic}
        className={`rounded-xl px-5 py-2.5 ${isLoading ? "cursor-not-allowed bg-gray-400 text-gray-600" : "bg-background"}`}
      >
        <PlusCircleIcon size={16} />
      </button>
    </div>
  );
};

export default InputTopics;
