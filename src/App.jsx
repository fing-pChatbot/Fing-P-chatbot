import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./pages/ProtectedRoute";
import AdminPage from "./pages/AdminPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/" element={<ProtectedRoute />} />
        <Route path="/:sessionId" element={<ProtectedRoute />} />
      </Routes>
    </div>
  );
};

export default App;
