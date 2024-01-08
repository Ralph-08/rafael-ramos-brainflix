import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./pages/Page/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/videos/:videoId" element={<Page />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
