import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { FavouritePage } from "./pages/FavouritePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<FavouritePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
