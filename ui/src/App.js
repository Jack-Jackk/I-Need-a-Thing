import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import CreatePost from './views/Create Post'
import Layout from './layouts'
import ThemeContextProvider from './context/themeContext'
import Login from './views/Login'
import Register from './views/Register'
import CreateRequest from './views/CreateRequest'
import CreateService from './views/CreateService'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/posts/new" element={<CreatePost/>}/>
            <Route path="/request/new" element={<CreateRequest/>}/>
            <Route path="/service/new" element={<CreateService/>}/>
          </Route>
        </Routes>
      </ThemeContextProvider>
    </div>
  )
}

export default App
