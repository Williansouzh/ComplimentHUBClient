import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/registerPage";
import { HomePage } from "./pages/homePage";
import { FeedContainer } from "./components/features/feedContainer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/homepage" element={<HomePage />}>
          <Route path="compliments" element={<FeedContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
