import { FC, memo } from 'react'
import { IKeyboard } from '../../INTERFACES/interfaces'
import CalculatorButton from '../../ENTITIES/CalculatorButton/CalculatorButton'
import styles from './keyboard.module.sass'
import { AddClickFunction } from './KeyboardLogic'

const Keyboard: FC<IKeyboard> = memo(({ ops, onclick, Value, GetResult }) => {

	const buttons: string[][] = [
		ops.slice(1, 5),
		['7', '8', '9', ops[5]],
		['4', '5', '6', ops[6]],
		['1', '2', '3', ops[7]],
		['00', '0', '='],
		[ops[10], ops[0], ops[8], ops[9]]
	]


	return (
		<div className={styles.Keyboard}>
			{buttons.flat().map(but => {
				const coloredButtons = ['=', 'C', '⌫']
				const click = AddClickFunction({ops, onclick, Value, GetResult, but})
				return (
					<CalculatorButton key={but} ops={ops} value={but} onclick={click} coloredButtons={coloredButtons}/>
				)
			}
			)}
		</div>
	)
})

export default Keyboard