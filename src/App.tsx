import './App.css'
import Home from './paginas/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './paginas/login/Login'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Cadastro from './paginas/cadastro/Cadastro'
import { AuthProvider } from './contexts/AuthContexts'

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
