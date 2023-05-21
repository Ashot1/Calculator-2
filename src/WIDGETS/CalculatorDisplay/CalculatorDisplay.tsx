import { FC } from 'react'
import TransparentInput from '../../UI/TransparentInput/TransparentInput'
import styles from './calculatorDisplay.module.sass'
import FastResult from '../../ENTITIES/FastResult/FastResult'
import { ICalculatorDisplay } from '../../INTERFACES/interfaces'

const CalculatorDisplay: FC<ICalculatorDisplay> = ({setValue, Value, Result, setOpenedHistory, GetResult}) => {
	const MatchQuery300: boolean = window.matchMedia("(max-width: 300px)").matches,
		MatchQuery1024: boolean = window.matchMedia("(min-width: 1024px)").matches,
		MaxInputFZ: number = MatchQuery300 ? 10 : MatchQuery1024 ? 25 : 16,
		InputFZ: number = Value.length > MaxInputFZ ? Value.length / MaxInputFZ : 1

	const EnterHandler: (e: any) => void = (e) => {
		if(e.key === 'Enter') {
			GetResult()
		}
	}


	return (
		<div className={styles.Display} onKeyUp={EnterHandler}>
			<FastResult Result={Result} setOpenedHistory={setOpenedHistory} />
			<TransparentInput placeholder="0" FZ={InputFZ} setValue={setValue} Value={Value}/>
		</div>
	)
}

export default CalculatorDisplay