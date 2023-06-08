import CalculatorPage from '../PAGES/CalculatorPage/CalculatorPage'
import { FC, useEffect } from 'react'
import AppLayout from '../LAYOUTS/AppLayout/AppLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundedPage from '../PAGES/NotFoundedPage/NotFoundedPage'
import ConverterPage from '../PAGES/ConverterPage/ConverterPage'
import ValuteLoader from '../PAGES/ConverterPage/ValuteLoader'
import ErrorPage from '../PAGES/ErrorPage/ErrorPage'

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: ":lang/calculator",
                element: <CalculatorPage/>
            },
            {
                  path: ":lang/converter",
                  element: <ConverterPage/>,
                  loader: ValuteLoader,
                  errorElement: <ErrorPage/>
            },
            {
                path: ":lang/*",
                element: <NotFoundedPage/>
            }
        ]
    }

])

const App: FC = () => {
    const cursor: null | string = localStorage.getItem("cursor")

    useEffect(() => {
        const FavoriteList = localStorage.getItem("ConverterList")
        if(!FavoriteList){
            localStorage.setItem("ConverterList", 'USD,EUR')
            window.location.reload()
        }
    }, [])

    useEffect(() => {
        if(!cursor) {
            localStorage.setItem("cursor", "dot")
            window.location.reload()
        }
        if(cursor) document.documentElement.dataset.cursor = cursor
    }, [cursor])

    return <RouterProvider router={router}/>
}

export default App