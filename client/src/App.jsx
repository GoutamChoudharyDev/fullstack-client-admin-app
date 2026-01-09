import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/homepage/HomePage"
import AdminLayout from "./pages/adminpanel/AdminLayout"
import AddProject from "./pages/adminpanel/AddProject"
import AddClient from "./pages/adminpanel/AddClient"
import ViewContacts from "./pages/adminpanel/ViewContacts"
import ViewSubscribers from "./pages/adminpanel/ViewSubscribers"

const App = () => {
  return (
    <Routes>

      {/* Landing Page */}
      <Route path="/" element={<HomePage />} />

      {/* Admin Panel Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="projects" element={<AddProject />} />
        <Route path="clients" element={<AddClient />} />
        <Route path="contacts" element={<ViewContacts />} />
        <Route path="subscribers" element={<ViewSubscribers />} />
      </Route>
    </Routes>
  )
}

export default App
