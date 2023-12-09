import NavBar from "../ui/NavLinks/nav-links";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import UserInfo from "../UserInfo/UserInfo";


export default function SideNav() {

  return (
    <div className="flex h-full flex-col bg-bg-custom md:px-0 rounded-b-2xl">
      <div className="flex justify-center pt-9">
        <ArrowLeftOnRectangleIcon
          className="h-10 w-10 text-txt-custom"
        />
      </div>
      <div className="flex grow flex-row justify-between px-0 space-x-2 md:flex-col md:space-x-0 md:space-y-2 rounded-b-2xl">
        <div className="px-4">
          <NavBar />
        </div>
        <UserInfo />
      </div>
    </div>
  );
}
