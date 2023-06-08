import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './APP/App.tsx'
import './index.sass'
import MobileProvider from './CONTEXTS/MobileContext.tsx'
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
    onNeedRefresh: () =>{
        if(confirm('Доступно обновление. Перезагрузить страницу? \n New content available. Reload page?')){
            updateSW(true)
        }
    }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <MobileProvider>
            <App/>
        </MobileProvider>
    </React.StrictMode>,
)
