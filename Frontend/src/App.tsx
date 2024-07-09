import './App.css'

import { Routes, Route } from 'react-router-dom'

import Navbar from './Layout/Navbar/Navbar'
import Footer from './Layout/Footer/Footer'
//import View from './Pages/View/View'
import Edit from './Pages/Edit/Edit'
import Delete from './Pages/Delete/Delete'
import Home from './Pages/Home/Home'
import Blogs from './Pages/Blogs/Blogs'
import Add from './Pages/Add/Add'



function App() {
  

  return (
   <>
   <Routes>
    <Route path= '/' element={[<Navbar />,<Home />,<Footer />]}></Route>
    <Route path= '/Blogs' element={[<Navbar />,<Blogs />,<Footer />]}></Route>
    <Route path= '/View/:id' element={[<Navbar />,<Footer />]}></Route>
    <Route path= '/Delete/:id' element={[<Navbar />,<Delete />,<Footer />]}></Route>
    <Route path= '/Edit/:id' element={[<Navbar />,<Edit />,<Footer />]}></Route>
    <Route path= '/Add' element={[<Navbar />,<Add />,<Footer />]}></Route>
   </Routes>
   </>
  )
}

export default App
