import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import './App.css'
import Layout from './common/Layout'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    

    </Route>
  ))

  return (
    <RouterProvider router={router}/>
  )
}

export default App
