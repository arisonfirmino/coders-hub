"use client";

import { useState } from "react";

import { PlusCircleIcon } from "lucide-react";

import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";

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
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
      <Button disabled={isLoading} onClick={handleAddTopic}>
        <PlusCircleIcon size={16} />
      </Button>
    </div>
  );
};

export default InputTopics;
