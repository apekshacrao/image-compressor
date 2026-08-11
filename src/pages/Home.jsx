import { useState } from "react";
import UploadArea from "../components/UploadArea";
import CompressionControls from "../components/CompressionControls";
import ImagePreview from "../components/ImagePreview";

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <main>
      <h1>Compress Your Images</h1>
      <p>Reduce image size without compromising quality.</p>

      <UploadArea onFileSelect={setSelectedFile} />
      <ImagePreview file={selectedFile} />
      <CompressionControls file={selectedFile} />
    </main>
  );
}

export default Home;