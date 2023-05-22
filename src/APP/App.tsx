import CalculatorPage from '../PAGES/CalculatorPage/CalculatorPage'
import { FC } from 'react'
import AppLayout from '../LAYOUTS/AppLayout/AppLayout'
import Cursor from '../WIDGETS/Cursor/Cursor'

const App: FC = () => {
    return (
        <AppLayout>
            <>
                <Cursor/>
                <CalculatorPage/>
            </>
        </AppLayout>
  )
}

export default App
