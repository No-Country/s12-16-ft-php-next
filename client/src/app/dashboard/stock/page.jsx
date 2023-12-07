"use client";
import React, { useState } from "react";
import ExampleTable from "./components/table";
import Filters from "./components/filters";

export default function Page() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedCode, setSelectedCode] = useState("");

  const handleOption = (selectedOption, searchValue) => {
    if (selectedOption !== "") {
      setSelectedCode(""); 
      setSelectedOption(selectedOption);
    } else {
      setSelectedCode(searchValue); 
    }
    console.log("Codigo en page:", searchValue);
  };

  return (
    <div>
      <Filters func={handleOption} />
      <ExampleTable selectedOption={selectedOption} selectedCode={selectedCode} />
    </div>
  );
}
