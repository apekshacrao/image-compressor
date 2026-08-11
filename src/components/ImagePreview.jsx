function ImagePreview({ file }) {
  if (!file) {
    return null;
  }

  const imageUrl = URL.createObjectURL(file);

  const fileSize = (file.size / 1024).toFixed(2);

  return (
    <div className="image-preview">
      <img src={imageUrl} alt={file.name} />

      <p>{file.name}</p>
      <p>Original size: {fileSize} KB</p>
    </div>
  );
}

export default ImagePreview;