import { FC } from 'react'
import Background from '../../UI/Background/Background'
import styles from './appLayout.module.sass'
import Header from '../../MODULES/Header/Header'
import { Toaster } from 'react-hot-toast'
import Cursor from '../../WIDGETS/Cursor/Cursor'
import MainLayout from '../MainLayout/MainLayout'
import { Outlet, useLocation, Navigate } from "react-router-dom"

const AppLayout: FC = () => {
	const location = useLocation()
	if(location.pathname === '/') return <Navigate replace to={`/${window.navigator.language}/calculator`} />

	return (
		<div className={styles.App}>
			<Header/>
			<Toaster  position="top-right" reverseOrder={true}/>
			<Background/>
			<Cursor/>
			<MainLayout center={location.pathname.split('/')[2] === 'calculator' || location.pathname.split('/')[2] === 'NotFound'}>
				<Outlet/>
			</MainLayout>
		</div>
	)
}

export default AppLayout