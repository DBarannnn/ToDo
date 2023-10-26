import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import './App.css'
import Layout from './common/Layout'
import Home from './components/Home'
import CreateToDo from './components/CreateToDo'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home />}/>
      <Route path='todo/create' element={<CreateToDo/>}/>
    </Route>
  ))

  return (
    <RouterProvider router={router}/>
  )
}

export default App
