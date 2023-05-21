import styles from './background.module.sass'
import { FC } from 'react'

const Background:FC = () => {
	return (
		<div className={styles.backgroundApp}>
			<span className={styles.backgroundItem}></span>
			<span className={styles.backgroundItem}></span>
			<span className={styles.backgroundItem}></span>
		</div>
	)
}

export default Background