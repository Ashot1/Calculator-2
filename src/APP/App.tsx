import CalculatorPage from '../PAGES/CalculatorPage/CalculatorPage'
import { FC, useEffect } from 'react'
import AppLayout from '../LAYOUTS/AppLayout/AppLayout'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import NotFoundedPage from '../PAGES/NotFoundedPage/NotFoundedPage'
// import ConverterPage from '../PAGES/ConverterPage/ConverterPage'

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: ":lang/calculator",
                element: <CalculatorPage/>
            },
            // {
            //   path: ":lang/converter",
            //   element: <ConverterPage/>
            // },
            {
                path: "*",
                element: <NotFoundedPage/>
            }
        ]
    }

])

const App: FC = () => {
    const cursor: null | string = localStorage.getItem("cursor")
    if(!cursor) {
        localStorage.setItem("cursor", "dot")
        window.location.reload()
    }

    useEffect(() => {
        if(cursor) document.documentElement.dataset.cursor = cursor
    }, [cursor])

    return <RouterProvider router={router}/>
}

export default App