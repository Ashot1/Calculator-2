import styles from './ClearHistoryButton.module.sass'
import { FC, memo } from 'react'

const ClearHistoryButton: FC<{Clear: () => void, text: string}> = memo(({Clear, text}) => {
	return (
		<div className={styles.buttonPos}>
			<button onClick={Clear}>{text}</button>
		</div>
	)
})

export default ClearHistoryButton
