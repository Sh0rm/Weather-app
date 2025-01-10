import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between fixed top-0 z-10 bg-[#aeb2c5f6] h-14 w-full shadow-md px-10">
      <Link href={"/"} className="text-2xl font-bold">
        Home
      </Link>
      <Link href={"/saved"} className="text-2xl font-bold">
        Saved users
      </Link>
    </div>
  );
};

export default Header;
