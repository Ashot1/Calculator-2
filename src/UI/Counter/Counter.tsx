import { FC } from 'react'
import styles from './counter.module.sass'

const Counter: FC<{Result: string}> = ({Result}) => {
	return (
		<span className={styles.Counter}>
			{Result}
		</span>
	)
}

export default Counter