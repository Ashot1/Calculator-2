import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './APP/App.tsx'
import './index.sass'
import MobileProvider from './CONTEXTS/MobileContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <MobileProvider>
            <App/>
        </MobileProvider>
    </React.StrictMode>,
)
