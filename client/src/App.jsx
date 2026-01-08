import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AdminPanel from "./pages/AdminPanel"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  )
}

export default App
