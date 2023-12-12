"use client";
import React, { useState } from "react";
import Invoice from "./Invoice";
import DocumentActionsMenu from "./DocumentActionsMenu";

export default function page() {
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
      <DocumentActionsMenu func={handleOption} />
      <Invoice selectedOption={selectedOption} selectedCode={selectedCode} />
    </div>
  );
}
