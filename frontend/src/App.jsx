import './App.css'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import {  createBrowserRouter ,Form,RouterProvider } from 'react-router-dom'
import { Login } from './components/pages/Login'
import {Signup} from "./components/pages/Signup"
import { Header } from './components/pages/header/Header'
const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <div>
      <Navbar/>
      <HeroSection/>
      <Header/>
    </div>
  },

  {
    path : "/login",
    element : <div>
      <Navbar/>
      <Login/>
      <Header/>
    </div>
  },
  {
    path : "/signup",
    element : <div>
      <Navbar/>
      <Signup/>
      <Header/>
    </div>
  }
])
function App() {

  return (
    <>
    <div>
    <RouterProvider router={appRouter} />
    </div>
    </>
  )
}

export default App
