"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // ✅ Import hook
import "./flownav.css";

export default function Flownav() {
  const pathname = usePathname(); // ✅ Get current path
  return (
    <header className="flownav-header">
      <div className="flownav-container">
        {/* Logo */}
        <div className="flownav-logo flex items-center gap-2">
          <Link href="/">
          <Image
            src="/KC.jpg"
            alt="My Logo"
            width={40}
            height={40}
          /></Link>
          <Link href="/" className="logo-text">
  KaythriClone
</Link>
        </div>
        {/* Nav links */}
        <nav className="flownav-nav">
          <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
          <Link href="/about" className={pathname === "/about" ? "active" : ""}>About</Link>
          <Link href="/completedprojects" className={pathname === "/completedprojects" ? "active" : ""}>Completed Projects</Link>
          <Link href="/upcomingprojects" className={pathname === "/upcomingprojects" ? "active" : ""}>UpcomingProjects</Link>
          <Link href="/gallery" className={pathname === "/gallery" ? "active" : ""}>Gallery</Link>
          <Link href="/blogs" className={pathname === "/blogs" ? "active" : ""}>Blogs</Link>
          <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}