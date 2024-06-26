import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import store from './store/store.js'
import { AuthLayout,Login } from './components/index.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Post from './pages/Post.jsx'
import Home from './pages/Home.jsx'
import AddPost from "./pages/AddPost";
import SignupPage from './pages/SignupPage.jsx'
import EditPost from "./pages/EditPost";
import AllPost from "./pages/AllPost";



//Need to think upon routing

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
          {
              path: "/",
              element: <Home />,
          },
          {
              path: "/login",
              element: (
                  <AuthLayout authentication={false}>
                      <Login />
                  </AuthLayout>
              ),
          },
          {
              path: "/signup",
              element: (
                  <AuthLayout authentication={false}>
                      <SignupPage />
                  </AuthLayout>
              ),
          },
          {
              path: "/all-posts",
              element: (
                  <AuthLayout authentication>
                      {" "}
                      <AllPost />
                  </AuthLayout>
              ),
          },
          {
              path: "/add-posts",
              element: (
                  <AuthLayout authentication>
                      {" "}
                      <AddPost />
                  </AuthLayout>
              ),
          },
          {
              path: "/edit-post/:slug",
              element: (
                  <AuthLayout authentication>
                      {" "}
                      <EditPost />
                  </AuthLayout>
              ),
          },
          {
              path: "/post/:slug",
              element: <Post />,
          },
      ],
  },
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
</React.StrictMode>


)
