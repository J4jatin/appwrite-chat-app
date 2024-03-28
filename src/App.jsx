import Room from "./pages/Room"
import LoginPage from "./pages/LoginPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PrivateRoutes from "./components/PrivateRoutes"
import { AuthProvider } from "./utils/authContext"
import RegisterPage from "./pages/RegisterPage"

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route element={<PrivateRoutes />}>
            <Route path='/' element={<Room />} />
          </Route>

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
