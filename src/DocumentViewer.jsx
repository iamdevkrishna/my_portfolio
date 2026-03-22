import React, { useState } from 'react';
import { X } from 'lucide-react';

const DocumentViewer = ({ title, fileUrl, isPdf, buttonText, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Dynamic Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-all shadow-lg border border-transparent hover:border-white/20"
      >
        <Icon size={18} />
        {buttonText}
      </button>

      {/* The Pop-up Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10">

          <div className="relative w-full max-w-5xl h-[85vh] bg-neutral-900 rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">

            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-neutral-950">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <Icon size={18} className="text-gray-400" />
                {title}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            {/* Smart Viewer: Switches between PDF iframe and Image tag */}
            <div className="flex-grow w-full h-full bg-neutral-800 flex items-center justify-center overflow-auto p-2 md:p-6">
              {isPdf ? (
                <iframe
                  src={fileUrl}
                  className="w-full h-full border-none rounded shadow-sm bg-white"
                  title={title}
                />
              ) : (
                <img
                  src={fileUrl}
                  alt={title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/5"
                />
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default DocumentViewer;