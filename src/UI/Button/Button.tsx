import styles from './Button.module.sass'
import { FC, memo } from 'react'
import { IButton } from '../../interfaces'

const Button: FC<IButton> = memo(({color, bg, onclick, children, dopClass}) => {

	return (
		<button className={`${styles.Button} ${dopClass}`} style={{color: color, background: bg}} onClick={onclick}>
			{children}
		</button>
	)
})

export default Button
