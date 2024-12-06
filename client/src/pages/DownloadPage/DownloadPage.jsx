import React from "react";
import "../../styles/DownloadPage/downloadpage.css";
import DownloadForm from "./components/DownloadForm";

function DownloadPage() {
  return (
    <main className="download__page container flex flex__column">
      <div className="download__page__text flex flex__column">
        <h1 className="flex">Youtube Video Downloader</h1>
        <p>Download youtube videos in different formats</p>
      </div>

      <DownloadForm />
    </main>
  );
}

export default DownloadPage;
