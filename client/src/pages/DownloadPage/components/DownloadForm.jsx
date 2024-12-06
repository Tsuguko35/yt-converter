import React, { useContext, useRef, useState } from "react";
import { ConverterContext } from "../../../context";
import "../../../styles/DownloadPage/downloadform.css";
import { IoDownloadOutline } from "react-icons/io5";

function DownloadForm() {
  const {
    ytDetails,
    setYtDetails,
    status,
    setStatus,
    downloadLink,
    setDownloadLink,
  } = useContext(ConverterContext);

  const [loading, setLoading] = useState(false);

  const form = useRef();

  const convertURL = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setYtDetails({
      ...ytDetails,
      [name]: value,
    });
  };

  return (
    <form
      ref={form}
      onSubmit={convertURL}
      className="download__form flex flex__column full__w">
      {/* URL input  */}
      <input
        type="url"
        name="url"
        placeholder="Paste Your URL..."
        required
        onChange={handleChange}
      />

      {/* Bottom  */}
      <div className="group flex justify__center align__center">
        {/* Format  */}
        <select
          className="group__button select flex align__center justify__center"
          name="format"
          id="format"
          onChange={handleChange}
          required>
          <option value="mp3" default>
            mp3
          </option>
          <option value="mp3" default>
            mp4
          </option>
        </select>

        {/* Submit  */}
        <button
          disabled={!ytDetails.url || !ytDetails.format}
          className="group__button flex align__center justify__center"
          type="submit">
          {loading ? (
            <>asd</>
          ) : (
            <>
              <IoDownloadOutline />
              Download
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default DownloadForm;
