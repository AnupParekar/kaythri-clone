'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-6 border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="font-semibold text-lg text-sky-500">Kaythri Clone</p>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
