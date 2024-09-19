import React, { useState } from 'react';

const FileUpload = ({ register, setValue }) => {
  const [selectedFileName, setSelectedFileName] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
      setValue("pdf", file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFileName(null);
    setValue("pdf", null);
  };

  return (
    <div className="flex items-center gap-4">
      <label htmlFor="file-upload" className="inline-block px-4 py-2 bg-amber-900 text-white rounded-lg cursor-pointer">
        Anexar nota fiscal
        <input
          id="file-upload"
          type="file"
          name="pdf"
          accept="application/pdf"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {selectedFileName && (
        <button
          type="button"
          onClick={handleRemoveFile}
          className="flex bg-red-500 items-center justify-center p-2 text-white rounded-full hover:bg-red-700"
        >
          🗑️
        </button>
      )}

      {selectedFileName && <span className="text-gray-700">{selectedFileName}</span>}
    </div>
  );
};

export default FileUpload;

