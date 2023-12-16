'use client';

import ProviderTable from "./components/ProviderTable";
import SearchInput from "./components/SearchInput";
import FilterInput from "./components/FilterInput";
import AddProviderButton from "./components/AddProvider";
import NotificationPopover from "../stock/components/NotificationPopover";

export default function Provider() {
  return (<div>
    <div className="flex flex-row justify-between">
      <SearchInput />
      <FilterInput />
      <AddProviderButton />
      <NotificationPopover />
    </div>
    <ProviderTable />
  </div>)

}
