import styles from './Button.module.sass'
import { FC, memo } from 'react'
import { IButton } from '../../INTERFACES/interfaces'

const Button: FC<IButton> = memo(({color, bg, onclick, children, height, dopClass}) => {

	return (
		<button className={`${dopClass} ${styles.Button}`} style={{color: color, background: bg, height: height}} onClick={onclick}>
			{children}
		</button>
	)
})

export default Button
