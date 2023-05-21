import { FC, useEffect, useState } from 'react'
import styles from './calculator.module.sass'
import CalculatorDisplay from '../../WIDGETS/CalculatorDisplay/CalculatorDisplay'
import Keyboard from '../../WIDGETS/Keyboard/Keyboard'
import HistoryList from '../../WIDGETS/HistoryList/HistoryList'
import { AnimatePresence } from 'framer-motion'
import { GetResult } from './CalculatorLogic'

const Calculator: FC = () => {
	const [Value, setValue] = useState<string>(''),
		[Result, setResult] = useState<string>('0'),
		[History, setHistory] = useState<string[]>([]),
		[OpenedHistory, setOpenedHistory] = useState<boolean>(false),
		ops: string[] = ['^', 'C', '×', '÷', '⌫', '-', '+', '.', '(', ')', '√']
	const [matchQuery, setmatchQuery] = useState<boolean>(window.matchMedia("(max-width: 768px)").matches)

	useEffect(() => {
		window.addEventListener("resize", () => setmatchQuery(window.matchMedia("(max-width: 768px)").matches))
	}, [])

	const Res: () => void = () => {
		const result: string = GetResult(Value),
			History = `${Value} = ${result}`
		setResult(History)
		setHistory(prev => [History, ...prev])
		setValue(result)
	}

	const OpenCloseHistory: () => void = () =>{
		setOpenedHistory(!OpenedHistory)
	}

	return (
		<div className={styles.Wrapper}>
			<div style={{width: '100%', display: 'grid', placeItems: 'center'}}>
				<h2 className={styles.title} onClick={() => setOpenedHistory(!OpenedHistory)}>V-Calculator</h2>
			</div>
			<CalculatorDisplay setValue={(e) => setValue((e.target as HTMLInputElement)?.value)} Value={Value} Result={Result} setOpenedHistory={OpenCloseHistory} GetResult={Res}/>
			<div className={styles.BottomMenu}>
				<AnimatePresence>
					{(OpenedHistory || !matchQuery) && <HistoryList key="HistoryList" History={History} setHistory={setHistory} setValue={setValue}/>}
					{(!OpenedHistory || !matchQuery) && <Keyboard ops={ops} onclick={setValue} Value={Value} GetResult={Res} key="Keyboard"/>}
				</AnimatePresence>
			</div>

		</div>
	)
}

export default Calculator