import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Bookmarks from "./pages/Bookmarks";
import CreateEvent from "./pages/CreateEvent";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import LoginNavbar from "./components/LoginNavbar";
import RequireAuth from "./components/RequireAuth";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  return (
    <>
      {isLoginPage ? <LoginNavbar /> : <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <RequireAuth>
              <Bookmarks />
            </RequireAuth>
          }
        />
        <Route
          path="/create"
          element={
            <RequireAuth>
              <CreateEvent />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
