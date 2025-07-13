import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/home'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
