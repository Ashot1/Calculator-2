import { FC } from 'react'
import { ILayout } from '../../INTERFACES/interfaces'
import styles from './main.module.sass'

const MainLayout: FC<ILayout> = ({children}) => {
	return (
		<main className={styles.Main}>
			{children}
		</main>
	)
}

export default MainLayout