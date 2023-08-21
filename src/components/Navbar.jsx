import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-slate-300 mb-4 flex justify-between items-center px-20 p-3">
      <Link href="/" className="text-black font-bold">
        Home
      </Link>
      <ul>
        <li>
          <Link href="/about" className="text-black font-bold">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
