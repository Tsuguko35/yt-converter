import { useState } from "react";
import { ConverterContext } from "./context";
import { Routes, Route } from "react-router-dom";
import { routes } from "./config";
import "./styles/styles.css";
import "./styles/fontface.css";
import { Footer, Header } from "./components";

function App() {
  const [ytDetails, setYtDetails] = useState({
    url: "",
    format: "mp3",
  });
  const [status, setStatus] = useState("");
  const [downloadLink, setDownloadLink] = useState(null);

  return (
    <>
      {/* Header  */}
      <Header />

      {/* Main  */}
      <ConverterContext.Provider
        value={{
          ytDetails,
          setYtDetails,
          status,
          setStatus,
          downloadLink,
          setDownloadLink,
        }}>
        <Routes>
          {routes.map((route) => (
            <Route
              exact
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </ConverterContext.Provider>

      {/* Footer  */}
      <Footer />
    </>
  );
}

export default App;
