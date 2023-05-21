import styles from './ClearHistoryButton.module.sass'
import { FC } from 'react'

const ClearHistoryButton: FC<{Clear: () => void}> = ({Clear}) => {
	return (
		<div className={styles.buttonPos}>
			<button onClick={Clear}>Очистить историю</button>
		</div>
	)
}

export default ClearHistoryButton
