import styles from './HistoryList.module.sass'
import { CSSProperties, FC } from 'react'
import HistoryUL from '../../ENTITIES/History/History'
import ClearHistoryButton from '../../ENTITIES/ClearHistoryButton/ClearHistoryButton'
import {motion} from 'framer-motion'
import { IHistoryList } from '../../interfaces'
import { Calculatortext } from '../../Localisation'

const HistoryList: FC<IHistoryList> = ({History, setHistory, setValue, lang}) => {
	const text = Calculatortext(lang)
	return (
		<motion.div exit={{opacity: 0}} className={styles.HistoryList}>
			<section>
				<h2 style={{"--width": lang === 'ru' ? '7.1ch' : '6.1ch'} as CSSProperties}>{text.History}</h2>
			</section>
			<HistoryUL Hist={History} onclick={setValue}/>
			<ClearHistoryButton Clear={() => setHistory([])} text={text.ButtonClear}/>
		</motion.div>
	)
}

export default HistoryList
