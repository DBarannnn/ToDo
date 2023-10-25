import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import './App.css'
import Layout from './common/Layout'
import Home from './components/Home'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home />}/>
      <Route path='todo/create' element={<p>Create your todo</p>}/>
    </Route>
  ))

  return (
    <RouterProvider router={router}/>
  )
}

export default App
