import { useState } from "react";
import { useDropzone } from "react-dropzone";

function UploadArea() {
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  };

 const { getRootProps, getInputProps } = useDropzone({
  onDrop,
  accept: {
    "image/jpeg": [".jpg", ".jpeg"],
    "image/png": [".png"],
    "image/webp": [".webp"],
  },
});

  return (
    <section className="upload-area" {...getRootProps()}>
      <input {...getInputProps()} />

      <h2>Upload Your Image</h2>
      <p>Drag & drop your image here or choose a file</p>

      <button type="button">Choose Image</button>

      {selectedFile && (
        <p>Selected file: {selectedFile.name}</p>
      )}
    </section>
  );
}

export default UploadArea;