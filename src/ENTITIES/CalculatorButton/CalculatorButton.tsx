import styles from './CalculatorButton.module.sass'
import { FC, memo } from 'react'
import Button from '../../UI/Button/Button'
import { ICalcButton } from '../../interfaces'

const CalculatorButton: FC<ICalcButton> = memo(({ops, value, onclick, coloredButtons}) => {
	const dopClass: string = value === '00' ? `${styles.Dubl} ${styles.default}`: styles.default
	const color: string = coloredButtons.includes(value) ? '#7C0C84'
		: ops.includes(value) ? '#4F1975'
			: '#C4B4E4'

	return (
		<Button color={ops.includes(value) || value === '=' ? 'white' : 'black'} bg={color} onclick={onclick} dopClass={dopClass}>
			{value}
		</Button>
	)
})

export default CalculatorButton
