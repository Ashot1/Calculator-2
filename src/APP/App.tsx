import CalculatorPage from '../PAGES/CalculatorPage/CalculatorPage'
import { FC } from 'react'
import AppLayout from '../LAYOUTS/AppLayout/AppLayout'
import Cursor from '../WIDGETS/Cursor/Cursor'
import { Toaster } from 'react-hot-toast'

const App: FC = () => {

    return (
        <AppLayout>
            <>
                <Toaster  position="top-right"
                          reverseOrder={true}/>
                <Cursor/>
                <CalculatorPage/>
            </>
        </AppLayout>
  )
}

export default App