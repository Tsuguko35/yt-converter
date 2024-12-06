import DownloadPage from "../pages/DownloadPage/DownloadPage";

const routes = [
  { path: "/", component: <DownloadPage /> },
  { path: "*", component: <DownloadPage /> },
];

export default routes;
