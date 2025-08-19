'use client';

export default function PdfButton({ pdfUrl, label }) {
  const handleClick = () => {
    window.open(pdfUrl, '_self'); // opens in same tab
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      {label}
    </button>
  );
}
