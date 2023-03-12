import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600  ">
      <Icon className="text-2xl sm:hidden" />
      <p className="hidden sm:inline text-xl">{title}</p>
    </Link>
  );
}
