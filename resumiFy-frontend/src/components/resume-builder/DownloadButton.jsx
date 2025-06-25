const DownloadButton = () => {
  // PDF via react-to-print (pixel perfect)
  const handlePrint = () => {
    window.print();
  }


  return (
    <div className="flex flex-wrap gap-4 my-4">
      <button
        onClick={handlePrint}
        className="rounded px-4 py-2 bg-gray-700 text-white hover:bg-gray-800"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default DownloadButton;
