import { FC } from 'react'
import { ILayout } from '../../interfaces'
import styles from './main.module.sass'

const MainLayout: FC<ILayout> = ({children, center}) => {
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