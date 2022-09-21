import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="left">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/ranks">
          <a>Ranks</a>
        </Link>
      </div>
      <div className="right">
        <Link href="/billing">
          <a>Billing</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/login">
          <a>Log Out</a>
        </Link>
      </div>
    </nav>

    // <div class="nav">
    //   <div class="left">
    //     <a href="home.html">Home</a>
    //     <a href="ranks.html">Ranks</a>
    //   </div>
    //   <div class="right">
    //     <a href="billing.html">Billing</a>
    //     <a href="contact.html">Contact</a>
    //     <a href="/index.html">Log Out</a>
    //   </div>
    // </div>

    // <nav>
    //   <div className="logo"></div>
    //   <Link href="/">
    //     <a>Home</a>
    //   </Link>
    //   <Link href="/ranks">
    //     <a>Ranks</a>
    //   </Link>
    //   <Link href="/billing">
    //     <a>Billing</a>
    //   </Link>
    //   <Link href="/contact">
    //     <a>Contact</a>
    //   </Link>
    //   <Link href="/login">
    //     <a>Log Out</a>
    //   </Link>
    // </nav>
  );
};

export default Navbar;
