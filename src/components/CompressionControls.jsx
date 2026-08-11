import { useState } from "react";
import imageCompression from "browser-image-compression";

function CompressionControls({file}) {
  const [quality, setQuality] = useState(80);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const handleCompression = async () => {
  if (!file) return;

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: width ? Number(width) : undefined,
    initialQuality: Number(quality) / 100,
    useWebWorker: true,
  };

  try {
    const compressedFile = await imageCompression(file, options);

    console.log(compressedFile);
  } catch (error) {
    console.error("Compression failed:", error);
  }
};
  return (
    <section className="compression-controls">
      <h2>Compression Settings</h2>

      <label>
        Quality: {quality}%
      </label>

      <input
        type="range"
        min="10"
        max="100"
        value={quality}
        onChange={(event) => setQuality(event.target.value)}
      />

      <label>
        Width
      </label>

      <input
        type="number"
        placeholder="Width in pixels"
        value={width}
        onChange={(event) => setWidth(event.target.value)}
      />

      <label>
        Height
      </label>

      <input
        type="number"
        placeholder="Height in pixels"
        value={height}
        onChange={(event) => setHeight(event.target.value)}
      />

      <button type="button" disabled={!file}>
  Compress Image
</button>
    </section>
  );
}

export default CompressionControls;