import styles from './CalculatorButton.module.sass'
import { FC } from 'react'
import Button from '../../UI/Button/Button'
import { ICalcButton } from '../../INTERFACES/interfaces'

const CalculatorButton: FC<ICalcButton> = ({ops, value, onclick, coloredButtons}) => {
	const dopClass: string = value === '00' ? styles.Dubl: ''
	const color: string = coloredButtons.includes(value) ? '#7C0C84'
		: ops.includes(value) ? '#4F1975'
			: '#C4B4E4'
	return (
		<Button color={ops.includes(value) || value === '=' ? 'white' : 'black'} bg={color} onclick={onclick} height="90%" dopClass={dopClass}>
			{value}
		</Button>
	)
}

export default CalculatorButton
