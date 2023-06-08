import { FC } from 'react'
import { ILayout } from '../../interfaces'
import styles from './main.module.sass'
// import { Navigate, useLocation } from 'react-router-dom'

const MainLayout: FC<ILayout> = ({children, center}) => {
	// const location = useLocation()
	// if(location.pathname === '/') return <Navigate replace to={`/${window.navigator.language}/calculator`} />

	return (
		<main className={styles.Main}
			style={{display: center ? 'grid' : 'flex',
				justifyContent: center ? '' : 'center',
				placeItems: center ? 'center' : ''}}
			>
			{children}
		</main>
	)
}

export default MainLayout