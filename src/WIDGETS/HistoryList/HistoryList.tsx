import styles from './HistoryList.module.sass'
import { FC, memo, useCallback, useMemo } from 'react'
import HistoryUL from '../../ENTITIES/History/History'
import ClearHistoryButton from '../../ENTITIES/ClearHistoryButton/ClearHistoryButton'
import {motion} from 'framer-motion'
import { IHistoryList } from '../../interfaces'
import { CalculatorText } from '../../Localisation'

const HistoryList: FC<IHistoryList> = memo(({History, setHistory, setValue, lang}) => {
	const text = useMemo(() => CalculatorText(lang), [lang])

	return (
		<motion.div exit={{opacity: 0}} className={styles.HistoryList}>
			<Title lang={lang} text={text}/>
			<HistoryUL Hist={History} onclick={setValue}/>
			<ClearHistoryButton Clear={useCallback(() => setHistory([]), [])} text={text.ButtonClear}/>
		</motion.div>
	)
})

export default HistoryList


const Title: FC<{lang: string, text: { History: string, ButtonClear: string}}> = memo(({lang, text}) => {

	return(
		<section>
			<h2>{text.History}</h2>
		</section>
	)
})