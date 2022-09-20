import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo"></div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/ranks">
        <a>Ranks</a>
      </Link>
      <Link href="/billing">
        <a>Billing</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/login">
        <a>Log Out</a>
      </Link>
    </nav>
  );
};

export default Navbar;
