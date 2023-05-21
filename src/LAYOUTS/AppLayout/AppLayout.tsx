import { FC } from 'react'
import { ILayout } from '../../INTERFACES/interfaces'
import Background from '../../UI/Background/Background'
import styles from './appLayout.module.sass'

const AppLayout: FC<ILayout> = ({children}) => {
	return (
		<div className={styles.App}>
			<Background/>
			{/*<Header/>*/}
			{children}
		</div>
	)
}

export default AppLayout