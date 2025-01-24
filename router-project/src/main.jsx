import { children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './Components/Home/Home.jsx'

import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
// import Github from './Components/Github/Github.jsx'
import Github, { githubInfoLoader } from './Components/Github/Github.jsx'



// const router = createBrowserRouter ( [
//   {path : "/",
//     element: <Root/>,

//     children: [
//       {
//        path : "",
//        element : <Home/>
//       },

//       {
//         path : "about",
//         element : <About/>
//       },
//       {
//         path : "contact",
//         element : <Contact/>
//       }
//     ]
//   } 
  
// ])


// << 2dn way to use oruter 



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      {/* <Route path='/github'  element={<Github />} /> */}
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <RouterProvider router ={router} />

  </StrictMode>,
)
