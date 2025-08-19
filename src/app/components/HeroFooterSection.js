"use client";
import Image from "next/image";
import Link from "next/link";
import "./herofooter.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left: Logo + description */}
        <div className="footer-section">
          <Image src="/KC.jpg" width={100} height={100} alt="Logo" />
          <p>
            Building trust through quality, transparency, and timely real estate
            solutions across Hyderabad and Telugu states.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/ongoingprojects">Ongoing Projects</Link></li>
            <li><Link href="/completedprojects">Completed Projects</Link></li>
            <li><Link href="/upcoming">Upcoming Projects</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Right: Ongoing Projects */}
        <div className="footer-section">
          <h3>Ongoing Projects</h3>
          <ul>
            <li>Nature Valley I</li>
            <li>Nature Valley II</li>
            <li>Nature Valley III</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
