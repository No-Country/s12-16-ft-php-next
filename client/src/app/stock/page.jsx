import React from "react";
import ExampleTable from "./components/table";
import Filters from "./components/filters";

export default function Page() {
  return (
    <div>
      <Filters />
      <ExampleTable />
    </div>
  );
}
