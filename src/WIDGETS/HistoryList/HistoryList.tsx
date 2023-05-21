import styles from './HistoryList.module.sass'
import { FC } from 'react'
import HistoryUL from '../../ENTITIES/History/History'
import ClearHistoryButton from '../../ENTITIES/ClearHistoryButton/ClearHistoryButton'

const HistoryList: FC<{ History: string[], setHistory: (Array: any[]) => void, setValue: (item: string) => void }> = ({History, setHistory, setValue}) => {
	return (
		<div className={styles.HistoryList}>
			<section>
				<h2>History</h2>
			</section>
			<HistoryUL Hist={History} onclick={setValue}/>
			<ClearHistoryButton Clear={() => setHistory([])}/>
		</div>
	)
}

export default HistoryList
