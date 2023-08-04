import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import CreatePost from './views/Create Post'
import Layout from './layouts'
import ThemeContextProvider from './context/themeContext'
import Login from './views/Login'
import Register from './views/Register'
import CreateRequest from './views/CreateRequest'
import CreateService from './views/CreateService'
import RequestsPage from './views/RequestsPage'
import ServicesPage from './views/ServicesPage'
import IndividualRequests from './views/IndividualRequests'
import IndividualServices from './views/IndividualServices'

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
            <Route path="/posts/new/request/" element={<CreateRequest/>}/>
            <Route path="/posts/new/service/" element={<CreateService/>}/>
            <Route path="/posts/requests/" element={<RequestsPage/>}/>
            <Route path="/posts/services/" element={<ServicesPage/>}/>
            <Route path="/posts/requests/id/" element={<IndividualRequests/>}/>
            <Route path="/posts/services/id/" element={<IndividualServices/>}/>
          </Route>
        </Routes>
      </ThemeContextProvider>
    </div>
  )
}

export default App
