import React, {useEffect} from 'react';
import Login from './Login';
import Home from './Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
    path: "/",
    element: <Login />
    },
    {
      path: "/home",
      element: <Home />
      },
  ]);

  return (
    <div >
      <RouterProvider router={appRouter}/>
      <footer className="text-center text-xl text-gray-500 p-10">
        This is a personal demo project for educational purposes. Not affiliated with any real streaming service.
      </footer>
    </div>
  )
}

export default Body
