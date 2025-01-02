"use client";
import Input from "@/components/Input";
import ListComp from "@/components/List";
import { useEffect, useState } from "react";

export default function Home() {
  const [InputValue, setInputValue] = useState("");
  const [List, setList] = useState([]);

  const handleClick = (inputValue) => {
    if (inputValue.trim() === "") {
      alert("Input cannot be empty");
      return;
    }
    setList((prevList) => [...prevList, inputValue]);
    setInputValue("");
  };

  const handleDeleteIndex = (index) => {
    setList((prevList) => prevList.filter((_, i) => i !== index));
  };

  const handleEditIndex = (index) => {
    setInputValue(List[index]);
    handleDeleteIndex(index);
  };
  useEffect(() => {
    if (!localStorage) return;

    const LocalProps = localStorage.getItem("todo");
    if (LocalProps) {
      setList(JSON.parse(LocalProps));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(List));
  }, [List]);

  return (
    <div>
      <Input
        handleClick={handleClick}
        InputValue={InputValue}
        setInputValue={setInputValue}
      />
      <ListComp
        List={List}
        handleDeleteIndex={handleDeleteIndex}
        handleEditIndex={handleEditIndex}
      />
    </div>
  );
}
