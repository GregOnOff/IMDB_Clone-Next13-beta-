import MenuItem from "./MenuItem";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 py-3 max-w-6xl sm:mx-auto items-center">
      <div className="flex">
        <MenuItem title={"Home"} address={"/"} Icon={AiFillHome} />
        <MenuItem title={"About"} address={"/about"} Icon={AiFillInfoCircle} />
      </div>
      <Link href={"/"}>
        <h2 className="my-3">
          <span className="text-2xl font-bold mx-4 mr-1 my-2 rounded-md bg-amber-500 py-2 px-4">
            IMDc
          </span>
          <span className="mr-2 text-lg">lone</span>
        </h2>
      </Link>
    </div>
  );
}
